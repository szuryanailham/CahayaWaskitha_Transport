<?php

Route::namespace('App\Http\Controllers\Admin')->group(function () {

    // Admin Only
    Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth:sanctum', 'role:admin']], function () {
        Route::resource('category', CategoryController::class)->only('index', 'create', 'store', 'edit', 'update', 'destroy', 'restore');
        Route::resource('unit', UnitController::class)->only('index', 'create', 'store', 'edit', 'update', 'destroy', 'restore');
        Route::resource('order', OrderController::class)->only('index', 'show');
    });
});
