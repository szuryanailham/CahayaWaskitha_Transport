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

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
    ];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
