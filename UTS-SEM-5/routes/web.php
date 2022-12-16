<?php

use App\Http\Controllers\category_controller;
use App\Http\Controllers\detail_controller;
use App\Http\Controllers\halaman_controller;
use App\Http\Controllers\publisher_controller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('home');
// });

Route::get('/', [halaman_controller::class, 'home']);

Route::get('/publisher', [publisher_controller::class, 'publisher']);

Route::get('/publisher_detail', [publisher_controller::class, 'publisher2']);

Route::get('/publisher_detail/{id}', [publisher_controller::class, 'publisher_detail']);

Route::get('/detail', [halaman_controller::class, 'detail']);

Route::get('/detail/{id}', [halaman_controller::class, 'detail_buku']);

Route::get('/contact', [halaman_controller::class, 'contact']);

Route::get('/categories/{id}', [category_controller::class, 'category_']);
