<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

// use model here
use App\Models\Order;

// use
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orders = Order::withTrashed()
            ->when($request->q, function ($query) use ($request) {
                $query->where('name', 'LIKE', "%{$request->q}%")
                    ->orWhere('address', 'LIKE', "%{$request->q}%")
                    ->orWhere('phone', 'LIKE', "%{$request->q}%");
            })
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Order/Index', [
            'orders' => $orders
        ]);
    }

    public function show($id)
    {
        $order = Order::with('unit')->findOrFail($id);

        return Inertia::render('Admin/Order/Show', [
            'order' => $order
        ]);
    }
}
