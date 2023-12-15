<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

// models
use App\Models\Category;
use App\Models\Unit;

// use
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Get all categories
        $categories = Category::all();

        // Initialize query builder for products
        $unitsQuery = Unit::query()->with('category', 'featuredImage');

        // Filter by category
        if ($request->category_id) {
            $unitsQuery->where('category_id', $request->category_id);
        }

        // Search by name
        if ($request->has('q')) {
            $searchTerm = $request->q;
            $unitsQuery->where(function ($query) use ($searchTerm) {
                $query->where('name', 'LIKE', "%{$searchTerm}%")
                    ->orWhere('description', 'LIKE', "%{$searchTerm}%");
            });
        }

        // Filter by price range (minimum price)
        if ($request->has('min')) {
            $minPrice = $request->min;
            $unitsQuery->where('price', '>=', $minPrice);
        }

        // Filter by price range (maximum price)
        if ($request->has('max')) {
            $maxPrice = $request->max;
            $unitsQuery->where('price', '<=', $maxPrice);
        }

        // Sorting
        $sortField = $request->sf ?? 'name';
        $sortOrder = $request->so === 'desc' ? 'desc' : 'asc';
        $unitsQuery->orderBy($sortField, $sortOrder);

        // Paginate the results and include the original query parameters
        $per_page = $request->has('per_page') ? $request->per_page : 10;
        $units = $unitsQuery->paginate($per_page)->withQueryString();

        dd(['categories' => $categories, 'units' => $units, 'request' => $request->all()]);

        return Inertia::render('User/Home', [
            'categories' => $categories,
            'units' => $units
        ]);
    }

    public function show($slug)
    {
        $unit = Unit::with('category', 'image')->where('slug', $slug)->first();

        if (!$unit) {
            return abort(404);
        }

        return Inertia::render('User/Home', [
            'unit' => $unit
        ]);
    }
}
