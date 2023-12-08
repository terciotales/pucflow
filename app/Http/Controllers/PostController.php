<?php

namespace App\Http\Controllers;

use App\Events\LikeDeleted;
use App\Events\NewLike;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Create route for the like method
    public function like(Post $post)
    {
        // Check if the user has already liked the post
        if ($post->likes()->where('user_id', Auth::id())->exists()) {
            // If so, delete the like
            $post->likes()->where('user_id', Auth::id())->delete();

            // Fire an event
            event(new LikeDeleted($post));
        } else {
            // If not, create a new like
            $post->likes()->create([
                'user_id' => Auth::id(),
            ]);

            // Fire an event
            event(new NewLike($post));
        }

        // Return the updated number of likes
        return $post->likes()->count();
    }
}
