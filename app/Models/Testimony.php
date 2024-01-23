<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimony extends Model
{
    protected $table = 'testimony';

    protected $fillable = [
        'name',
        'email',
        'category',
        'testimony',
        'rating',
    ];
}
