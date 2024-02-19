<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimony extends Model
{
    protected $table = 'testimony';

    protected $fillable = [
        'name',
        'email',
        'testimony',
        'rating',
    ];
}
