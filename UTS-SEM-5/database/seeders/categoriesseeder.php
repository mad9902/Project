<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\category;

class categoriesseeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            "Drama Genre",
            "Experimental Genre",
            "Fantasy Genre",
            "Historical Genre",
            "Horror Genre",
            "Science Fiction Genre",
            "Thriller Genre",
            "Western Genre"
        ]; foreach ($categories as $category) {
            category::create([
            "name" => $category
            ]);
        }

        }
    }

