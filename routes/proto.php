<?php

Route::prefix('/proto')->group(function () {

    // http://127.0.0.1:8000/proto/
    Route::inertia('/', 'Prototype/HomePage');

    // http://127.0.0.1:8000/proto/login
    Route::inertia('/login', 'Prototype/LoginPage');

    // http://127.0.0.1:8000/proto/unit
    Route::inertia('/unit', 'Prototype/UnitDetail');

    // http://127.0.0.1:8000/proto/checkout
    Route::inertia('/checkout', 'Prototype/Checkout');

    // http://127.0.0.1:8000/proto/success
    Route::inertia('/success', 'Prototype/Success');

    // http://127.0.0.1:8000/proto/about
    Route::inertia('/about', 'Prototype/About');

    // http://127.0.0.1:8000/proto/testimony
    Route::inertia('/testimony', 'Prototype/Testimony');
});
