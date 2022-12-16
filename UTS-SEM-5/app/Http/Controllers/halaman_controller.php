<?php

namespace App\Http\Controllers;

use App\Models\book;
use Illuminate\Http\Request;

class halaman_controller extends Controller
{
    public function home()
    {
        $books = book::all();
        return view("home", [
            "books" => $books
        ]);
    }

    public function detail()
    {
        $detail = book::all();
        return view("detail", [
            "detail" => $detail
        ]);
    }

    public function detail_buku($id)
    {
        $buku = book::findOrFail($id);
        return view("detail", [
            "buku" => $buku
        ]);
    }

    public function contact()
    {
        return view("contact", []);
    }
}
