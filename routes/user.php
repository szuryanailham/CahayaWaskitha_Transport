<?php

Route::namespace('App\Http\Controllers\User')->group(function () {
    Route::get('/unit/{slug}', 'HomeController@show');

    Route::get('/checkout/{order:no_order}/success', 'CheckoutController@success')->name('checkout.success');
    Route::get('/checkout/{id}', 'CheckoutController@show');
    Route::post('/checkout', 'CheckoutController@store');

    Route::get('/about', 'AboutController@index');
    Route::get('/testimony', 'TestimonyController@index');

    Route::inertia('/gallery', 'User/Gallery');
    Route::inertia('/paket_wisata', 'User/PaketWisata');

    Route::get('/{slug?}', 'HomeController@index')->name('home');
});
