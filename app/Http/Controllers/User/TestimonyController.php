<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

// models
use App\Models\Testimony;

// request
use App\Http\Requests\Testimony\StoreTestimonyRequest;

// use
use Inertia\Inertia;

class TestimonyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('User/Testimony');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestimonyRequest $request)
    {
        // get all request
        $input = $request->validated();

        // store to database
        $testimony = Testimony::create($input);

        if ($testimony) {
            return redirect('/testimony')->with([
                'message' => "testimony Successfully Added",
                'type' => 'success'
            ]);
        }

        return abort(500);
    }
}
