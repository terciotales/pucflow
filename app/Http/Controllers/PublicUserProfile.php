<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicUserProfile extends Controller {

    public function show( User $username ) {
//        return response()->json("Usuário Invalido", 401);
        // Verifique se o nome de usuário corresponde ao padrão alfanumérico
//        if (!preg_match('/^[A-Za-z0-9\-]+$/', $username)) {
//            abort(404);
//        }
//
//        // Tente encontrar o usuário com base no campo 'name'
//        $usuario = User::where('name', $username)->first();
//
//        // Se o usuário não for encontrado, retorne 404
//        if (!$usuario) {
//            abort(404);
//        }

        return Inertia::render( 'Teste/User', [
            'name' => $username->name,
            'email' => $username->email,
        ] );
    }
}
