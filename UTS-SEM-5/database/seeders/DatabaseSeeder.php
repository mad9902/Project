<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(categoriesseeder::class);
        $this->call(Publsher_Seeder::class);
        $this->call(BookCategory_Seeder::class);
        $this->call(Book_Seeder::class);
    }
}
