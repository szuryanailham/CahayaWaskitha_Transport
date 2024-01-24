<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    protected $table = 'order';

    protected $fillable = [
        'no_order',
        'name',
        'address',
        'phone',
        'unit_id',
        'unit',
        'price',
        'pickup_address',
        'start_date',
        'start_time',
        'end_date',
        'end_time',
        'duration',
        'total_price',
    ];

    protected static function booted()
    {
        static::creating(function ($order) {
            $order->no_order = 'TX' . now()->format('ym') . sprintf('%03d', static::count() + 1);
        });
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
