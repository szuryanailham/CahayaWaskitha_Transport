<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UnitImage extends Model
{
    protected $table = 'unit_image';

    protected $fillable = [
        'unit_id',
        'image',
    ];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
