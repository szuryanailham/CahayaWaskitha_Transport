<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use model here
use App\Models\Unit;
use App\Models\Category;

// resources
use App\Http\Resources\UnitResource;

// request
use App\Http\Requests\Unit\StoreUnitRequest;
use App\Http\Requests\Unit\UpdateUnitRequest;

// use
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $units = Unit::withTrashed()
            ->when($request->q, function ($query) use ($request) {
                $query->where('name', 'LIKE', "%{$request->q}%")
                    ->orWhere('description', 'LIKE', "%{$request->q}%");
            })
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Unit/Index', [
            'units' => UnitResource::collection($units),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();

        return Inertia::render('Admin/Unit/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUnitRequest $request)
    {
        // get all request
        $input = collect($request->validated());

        // store to database
        $unit = Unit::create($input->except('image')->toArray());

        // upload process here
        if ($request->hasFile('image.*')) {
            $firstImage = null;

            foreach ($input['image'] as $image) {

                $path = 'images/units/' . now()->format('Y/m/d');

                if (!Storage::has('public/' . $path)) {
                    Storage::makeDirectory('public/' . $path);
                }

                // store file
                $imagePath = $image->store($path, 'public');

                if (!$firstImage) {
                    $firstImage = UnitImage::create([
                        'unit_id' => $unit->id,
                        'image' => $imagePath,
                    ])->id;
                } else {
                    // Jika bukan gambar pertama, simpan seperti biasa
                    UnitImage::create([
                        'unit_id' => $unit->id,
                        'image' => $imagePath,
                    ]);
                }
            }

            // Update featured_image_id
            $unit->update([
                'featured_image_id' => $firstImage,
            ]);
        }

        if ($unit) {
            return redirect('/admin/unit')->with([
                'message' => "Unit Successfully Added",
                'type' => 'success'
            ]);
        }

        return abort(500);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $unit = Unit::with('image')->findOrFail($id);
        $categories = Category::get();

        return Inertia::render('Admin/Unit/Edit', [
            'unit' => $unit,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUnitRequest $request, $id)
    {
        // get all request
        $input = $request->validated();

        // update to database
        $unit = Unit::findOrFail($id);

        // upload process here
        if ($request->hasFile('image')) {
            $path = 'images/units/' . now()->format('Y/m/d');

            if (!Storage::has('public/' . $path)) {
                Storage::makeDirectory('public/' . $path);
            }

            // store file
            $input['image'] = $input['image']->store($path, 'public');

            if ($unit->image) {

                // first checking old image to delete from storage
                $get_item = $unit->image;

                // delete old photo from storage
                $input_old = 'storage/' . $get_item;

                if (File::exists($input_old)) {
                    File::delete($input_old);
                } else {
                    File::delete('storage/app/public/' . $get_item);
                }
            }
        }

        $unit->update($input);

        return redirect()->route('admin.unit.index')->with([
            'message' => "Unit Successfully Updated",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $unit = Unit::findOrFail($id);

        $unit->delete();

        return back()->with([
            'message' => "Unit Successfully Deleted",
            'type' => 'error'
        ]);
    }

    public function restore($id)
    {
        Unit::withTrashed()->findOrFail($id)->restore();

        return back()->with([
            'message' => "Unit Successfully Restored",
            'type' => 'success'
        ]);
    }
}
