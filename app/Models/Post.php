<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Post extends Model
{

    public function author(){
        return $this->belongsTo('\App\Models\User', 'author_id', 'id');
    }

    public function likes(){
        return $this->hasMany('\App\Models\Like', 'post_id', 'id');
    }

    public function liked(){

        if(Like::where(['post_id' => $this->id, 'user_id' => Auth::id()])->exists()){
            return true;
        } else{
            return false;
        }
    }
}
