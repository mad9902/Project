<?php

namespace App\Http\Controllers;

use App\Models\book;
use App\Models\bookcategory;
use App\Models\category;

class category_controller extends Controller
{
    public function category_($id)
    {
        $categories = category::findOrFail($id);
        $bookcategory = bookcategory::where('category_id', '=', $categories->id)->get();
        return view("categories", [
            "bookcategory" => $bookcategory,
            "categories" => $categories,
        ]);
    }



}
