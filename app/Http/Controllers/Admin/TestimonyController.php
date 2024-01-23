<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use model here
use App\Models\Testimony;

// use
use Inertia\Inertia;

class TestimonyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonies = Testimony::latest()->get();

        return Inertia::render('Admin/Testimony', [
            'testimonies' => $testimonies
        ]);
    }
}
