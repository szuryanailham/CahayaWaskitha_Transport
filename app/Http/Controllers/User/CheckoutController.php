<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

// model
use App\Models\Order;
use App\Models\Unit;

// resource
use App\Http\Resources\UnitResource;
use App\Http\Resources\OrderResource;

// request
use App\Http\Requests\Checkout\StoreCheckoutRequest;

// use
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Str;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function show($id)
    {
        $unit = Unit::findOrFail($id);

        return Inertia::render('User/Checkout', [
            'unit' => new UnitResource($unit),
        ]);
    }

    public function store(StoreCheckoutRequest $request)
    {
        $input = $request->validated();

        $input['unit'] = Unit::find($input['unit_id'])->name;
        $input['price'] = Unit::find($input['unit_id'])->price;

        // Generate unique random number
        // $input['no_order'] = Str::uuid();

        // Convert string date to Carbon instances
        $startDate = Carbon::parse($input['start_date']);
        $endDate = Carbon::parse($input['end_date']);

        // Calculate duration in days
        $input['duration'] = $endDate->diffInDays($startDate);
        $input['total_price'] = $input['duration'] * $input['price'];

        $create = Order::create($input);

        if ($create) {
            return redirect()->route('checkout.success', $create->no_order)->with([
                'message' => "Checkout successfully!",
                'type' => 'success'
            ]);
        }

        return abort(500);
    }

    public function success($noOrder)
    {
        $order = Order::where('no_order', $noOrder)->first();

        return Inertia::render('User/Success', [
            'order' => new OrderResource($order),
        ]);
    }
}
