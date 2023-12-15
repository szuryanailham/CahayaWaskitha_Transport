<?php

Route::namespace('App\Http\Controllers\User')->group(function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('/unit/{slug}', 'UnitController@show');

    Route::get('/checkout/{id}', 'CheckoutController@show');
    Route::post('/checkout', 'CheckoutController@store');
    Route::get('/checkout/success', 'CheckoutController@success')->name('checkout.success');

    Route::get('/about', 'AboutController@index');
    Route::get('/testimony', 'TestimonyController@index');
});
