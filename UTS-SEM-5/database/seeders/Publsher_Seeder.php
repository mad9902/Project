<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\publisher;

class Publsher_Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');
        for ($i = 1; $i <= 20; $i++){

            publisher::create([
                'name' => $faker->company,
                "address" => $faker->address,
                "phone" => $faker->phoneNumber,
                "email" => $faker->companyEmail,
                "image" => "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" . md5($faker->email) . "?d=identicon"
            ]);

        }
    }
}
