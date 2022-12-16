<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bookcategory extends Model
{
    use HasFactory;
    protected $table = "bookscategories";

    public function book()
    {
        return $this->belongsTo(book::class);
    }

    public function category()
    {
        return $this->belongsTo(category::class);
    }
}
