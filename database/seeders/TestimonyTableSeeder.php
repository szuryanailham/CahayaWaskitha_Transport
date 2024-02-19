<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimony;

class TestimonyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // category: 'pelayanan', 'unit', 'kebersihan', 'kenyamanan'

        $testimonies = [
            [
                'name' => 'Joko Prabowo',
                'email' => 'jokoprabowo@gmail.com',
                'testimony' => 'Sangat puas dengan mobil yang disewakan. Kondisinya sangat baik dan bensinnya juga irit. Layanan petugas rental mobil juga sangat ramah dan responsif. Saya pasti akan menggunakan layanan ini lagi buat bepergian',
                'rating' => 5,
            ],
    
        ];

        Testimony::insert($testimonies);
    }
}
