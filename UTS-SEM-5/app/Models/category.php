<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $guarded = ["id"];

    public function bookcategory()
    {
        return $this->hasMany(bookcategory::class);
    }
}
