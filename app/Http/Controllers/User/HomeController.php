<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

// models
use App\Models\Category;
use App\Models\Unit;
use App\Models\PromoBanner;

// resources
use App\Http\Resources\CategoryResource;
use App\Http\Resources\UnitResource;

// use
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $slug = null)
    {
        // Get all categories
        $categories = Category::all();

        // Initialize query builder for products
        $unitsQuery = Unit::query()->with('category');

        // Filter by category
        if ($slug) {
            $unitsQuery->whereHas('category', function ($query) use ($slug) {
                $query->where('slug', $slug);
            });
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
        $perPage = $request->has('per_page') ? $request->per_page : 10;
        $units = $unitsQuery->paginate($perPage)->withQueryString();

        // skip & take
        // $skip = $request->has('skip') ? $request->skip : 0;
        // $units = $unitsQuery->skip($skip)->take($perPage)->get();

        return Inertia::render('User/HomePage', [
            'categories' => CategoryResource::collection($categories),
            'units' => UnitResource::collection($units),
            'banners' => PromoBanner::all(),
        ]);
    }

    public function show($slug)
    {
        $unit = Unit::with('category')->where('slug', $slug)->first();

        if (!$unit) {
            return abort(404);
        }

        return Inertia::render('User/UnitDetail', [
            'unit' => new UnitResource($unit),
        ]);
    }
}
