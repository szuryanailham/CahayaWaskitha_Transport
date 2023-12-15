<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'order';

    protected $fillable = [
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
        'status',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
