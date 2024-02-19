<?php

use App\Models\PromoBanner;

Route::namespace('App\Http\Controllers\User')->group(function () {
    Route::get('/unit/{slug}', 'HomeController@show');

    Route::get('/checkout/{order:no_order}/success', 'CheckoutController@success')->name('checkout.success');
    Route::get('/checkout/{id}', 'CheckoutController@show');
    Route::post('/checkout', 'CheckoutController@store');

    Route::get('/about', 'AboutController@index');

    Route::get('/testimony', 'TestimonyController@index');
    Route::post('/testimony', 'TestimonyController@store');

    Route::inertia('/gallery', 'User/Gallery');
    Route::inertia('/paket-wisata', 'User/PaketWisata', [
        'banners' => PromoBanner::all(),
    ]);

    Route::get('/{slug?}', 'HomeController@index')->name('home');
});
