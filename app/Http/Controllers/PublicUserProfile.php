<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicUserProfile extends Controller {

    public function show( User $username ) {
        return Inertia::render( 'Profile/Profile', [
            'name'   => $username->name,
            'email'  => $username->email,
        ] );
    }
}
