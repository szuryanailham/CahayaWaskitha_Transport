<?php

Route::prefix('/proto')->group(function () {

    // http://127.0.0.1:8000/proto/
    Route::inertia('/', 'Prototype/PaketWisata');

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

    // http://127.0.0.1:8000/proto/dashboard
    Route::inertia('/dashboard', 'Prototype/Dashboard/Dashboard');

     // http://127.0.0.1:8000/proto/dashboard/addUnit
     Route::inertia('/dashboard/addUnit', 'Prototype/Dashboard/AddUnit');

      // http://127.0.0.1:8000/proto/dashboard/AllUnit
      Route::inertia('/dashboard/AllUnit', 'Prototype/Dashboard/AllUnit');
    
    // http://127.0.0.1:8000/proto/dashboard/transaction
    Route::inertia('/dashboard/transaction', 'Prototype/Dashboard/AllTransaction_Des');

    // http://127.0.0.1:8000/proto/dashboard/promo
    Route::inertia('/dashboard/promo', 'Prototype/Dashboard/PromoForm');

      // http://127.0.0.1:8000/proto/dashboard/feedback
      Route::inertia('/dashboard/feedback', 'Prototype/Dashboard/Feedback');

      // http://127.0.0.1:8000/proto/dashboard/addTransaction
      Route::inertia('/dashboard/addTransaction', 'Prototype/Dashboard/AddTransaction');
});
