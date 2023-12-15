<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

// model
use App\Models\Order;
use App\Models\Unit;

// request
use App\Http\Requests\Checkout\StoreCheckoutRequest;

// use
use Inertia\Inertia;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function show($id)
    {
        $unit = Unit::findOrFail($id);

        return Inertia::render('User/Checkout/Show', [
            'unit' => $unit
        ]);
    }

    public function store(StoreCheckoutRequest $request)
    {
        $input = $request->validated();

        $input['unit'] = Unit::find($input['unit_id'])->name;
        $input['duration'] = $input['end_date'] - $input['start_date'];
        $input['total_price'] = $input['duration'] * $input['price'];

        $create = Order::create($input);

        if ($create) {

            return redirect()->route('checkout.success')->with([
                'message' => "Checkout successfully!",
                'type' => 'success'
            ]);
        }

        return abort(500);
    }

    public function successs()
    {

        return Inertia::render('User/Checkout/Success');
    }
}
