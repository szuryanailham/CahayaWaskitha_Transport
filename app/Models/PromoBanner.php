<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PromoBanner extends Model
{
    protected $table = 'promo_banner';

    protected $fillable = [
        'title',
        'image',
    ];
}
