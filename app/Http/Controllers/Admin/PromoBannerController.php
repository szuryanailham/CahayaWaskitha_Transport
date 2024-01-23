<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use model here
use App\Models\PromoBanner;

// request
use App\Http\Requests\PromoBanner\StorePromoBannerRequest;

// use
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PromoBannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banners = PromoBanner::latest()->get();

        return Inertia::render('Admin/PromoBanner', [
            'banners' => $banners
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePromoBannerRequest $request)
    {
        // get all request
        $input = $request->validated();

        // upload process here
        if ($request->hasFile('image')) {
            $path = 'images/banners/' . now()->format('Y/m/d');

            if (!Storage::has('public/' . $path)) {
                Storage::makeDirectory('public/' . $path);
            }

            // store file
            $input['image'] = $input['image']->store($path, 'public');
        }

        // store to database
        $banner = PromoBanner::create($input);

        if ($banner) {
            return redirect('/admin/promo-banner')->with([
                'message' => "Promo Banner Successfully Added",
                'type' => 'success'
            ]);
        }

        return abort(500);
    }
}
