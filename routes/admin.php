<?php

use App\Http\Controllers\Admin\UnitController;
use App\Http\Controllers\Admin\OrderController;

Route::namespace('App\Http\Controllers\Admin')->group(function () {

    // Admin Only
    Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth:sanctum', 'role:admin']], function () {
        Route::get('dashboard', 'DashboardController@index');

        Route::put('unit/{unit}/restore', [UnitController::class, 'restore']);
        Route::resource('unit', UnitController::class)->only('index', 'create', 'store', 'edit', 'update', 'destroy');

        Route::put('order/{order}/restore', [OrderController::class, 'restore']);
        Route::resource('order', OrderController::class)->only('index', 'create', 'store', 'edit', 'update', 'destroy');
    });
});
