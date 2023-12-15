<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use model here
use App\Models\Category;

// request
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;

// use
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categories = Category::withTrashed()
            ->when($request->q, function ($query) use ($request) {
                $query->where('name', 'LIKE', "%{$request->q}%");
            })
            ->orderBy('name')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Category/Index', [
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        // get all request
        $input = $request->validated();

        // store to database
        $category = Category::create($input);

        return redirect()->route('admin.category.index')->with([
            'message' => "Category Successfully Added",
            'type' => 'success'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id);

        return Inertia::render('Admin/Category/Edit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, $id)
    {
        // get all request
        $input = $request->validated();

        // update to database
        $category = Category::findOrFail($id);

        $category->update($input);

        return redirect()->route('admin.category.index')->with([
            'message' => "Category Successfully Updated",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);

        $category->delete();

        return back()->with([
            'message' => "Category Successfully Deleted",
            'type' => 'error'
        ]);
    }

    public function restore($id)
    {
        Category::withTrashed()->findOrFail($id)->restore();

        return back()->with([
            'message' => "Category Successfully Restored",
            'type' => 'success'
        ]);
    }
}
