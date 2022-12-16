<?php

// namespace Database\Seeders;

// use Illuminate\Database\Seeder;
// use Faker\Factory as Faker;
// use App\Models\book;
// use App\Models\publisher;

// class Book_Seeder extends Seeder
// {
//     /**
//      * Run the database seeds.
//      *
//      * @return void
//      */
//     public function run()
//     {
//         $faker = Faker::create('id_ID');
//         $publishers = publisher::get();
//         for($i = 1; $i <= 40; $i++){
//             book::create([
//                 "publisher_id" => $publishers[rand(0, $publishers->count()-1)]->id,
//                 "title" => "Book - ".$i,
//                 "author" => $faker->name,
//                 "year" => $faker->year($max = "now"),
//                 "synopsis" => $faker -> text($maxNbChars = 230),
//                 "image" => "book-cover-".$i.".png",
//                 "image" => "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" . md5(strtolower(trim($faker->safeEmail()))) . "?d=identicon"
//             ]);
//         }
//     }
// }
