<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use model here
use App\Models\Order;
use App\Models\Unit;

// resources
use App\Http\Resources\OrderResource;

// request
use App\Http\Requests\Order\StoreOrderRequest;
use App\Http\Requests\Order\UpdateOrderRequest;

// use
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;
use Carbon\Carbon;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orders = Order::when($request->q, function ($query) use ($request) {
            $query->where('name', 'LIKE', "%{$request->q}%")
                ->orWhere('address', 'LIKE', "%{$request->q}%")
                ->orWhere('phone', 'LIKE', "%{$request->q}%");
        })
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Order/Index', [
            'orders' => OrderResource::collection($orders),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $units = Unit::get();

        if ($request->unit_id) {
            $unit = Unit::find($request->unit_id);
        }

        return Inertia::render('Admin/Order/Create', [
            'units' => $units,
            'unit' => $unit ?? null
        ]);
    }

    public function store(StoreOrderRequest $request)
    {
        $input = $request->validated();

        $input['unit'] = Unit::find($input['unit_id'])->name;
        $input['price'] = Unit::find($input['unit_id'])->price;

        // Generate unique random number
        $input['no_order'] = Str::uuid();

        // Convert string date to Carbon instances
        $startDate = Carbon::parse($input['start_date']);
        $endDate = Carbon::parse($input['end_date']);

        // Calculate duration in days
        $input['duration'] = $endDate->diffInDays($startDate);
        $input['total_price'] = $input['duration'] * $input['price'];

        $order = Order::create($input);

        if ($order) {
            return redirect('/admin/order')->with([
                'message' => "Order Successfully Added",
                'type' => 'success'
            ]);
        }

        return abort(500);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        if ($request->unit_id) {
            $unit = Unit::find($request->unit_id);
        }

        $order = Order::findOrFail($id);
        $units = Unit::get();

        return Inertia::render('Admin/Order/Edit', [
            'order' => $order,
            'units' => $units,
            'unit' => $unit ?? null,
            'time' => [
                'start_time' => $order->start_time->format('H:i'),
                'end_time' => $order->end_time->format('H:i'),
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, $id)
    {
        // get all request
        $input = $request->validated();

        // update to database
        $order = Order::findOrFail($id);

        $order->update($input);

        return redirect()->route('admin.order.index')->with([
            'message' => "Order Successfully Updated",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $order = Order::findOrFail($id);

        $order->delete();

        return back()->with([
            'message' => "Order Successfully Deleted",
            'type' => 'error'
        ]);
    }

    public function restore($id)
    {
        Order::withTrashed()->findOrFail($id)->restore();

        return back()->with([
            'message' => "Order Successfully Restored",
            'type' => 'success'
        ]);
    }
}
