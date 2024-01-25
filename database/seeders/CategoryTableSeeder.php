<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Mobil',
                'slug' => 'mobil',
                'description' => 'Temukan kenyamanan dan fleksibilitas perjalanan dengan koleksi mobil kami. Dari model efisien hingga kendaraan mewah, pilih mobil sesuai kebutuhan Anda. Perjalanan nyaman dan aman menanti, dengan armada terkini yang selalu terawat.'
            ],
            [
                'name' => 'Bus',
                'slug' => 'bus',
                'description' => 'Pilih bus kami untuk kelompok besar atau perjalanan keluarga. Dengan kapasitas luas dan fasilitas terbaik, perjalanan Anda menjadi lebih menyenangkan. Cocok untuk wisata, acara khusus, atau perjalanan kelompok. Bersama sopir berpengalaman, nikmati perjalanan tanpa khawatir.'
            ],
            [
                'name' => 'Motor',
                'slug' => 'motor',
                'description' => 'Rasakan kebebasan menjelajahi dengan motor kami yang dinamis. Ideal untuk pengalaman berkendara yang seru dan cepat. Motor kami memiliki desain stylish dan performa handal, siap membawa Anda menuju petualangan tak terlupakan.'
            ],
        ];

        Category::insert($categories);
    }
}
