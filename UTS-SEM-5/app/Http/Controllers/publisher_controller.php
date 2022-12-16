<?php

namespace App\Http\Controllers;

use App\Models\publisher;
use Illuminate\Http\Request;

class publisher_controller extends Controller
{

    public function publisher(){
        $publish = publisher::all();
        return view("publisher", [
            "publish"=> $publish
        ]);
    }

    public function publisher2(){
        $publishd = publisher::all();
        return view("publisher_detail", [
            "publishd"=> $publishd
        ]);

    }

    public function publisher_detail($id)
    {
        $publis = publisher::findOrFail($id);
        return view("publisher_detail", [
            "publis" => $publis
        ]);
    }

}
