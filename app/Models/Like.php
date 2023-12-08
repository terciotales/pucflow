<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    public function post(){
        return $this->belongsTo('\App\Post', 'post_id', 'id');
    }
}
