<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Dashboard');
    }
}
