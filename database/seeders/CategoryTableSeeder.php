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
            ['name' => 'Mobil', 'slug' => 'mobil'],
            ['name' => 'Bus', 'slug' => 'bus'],
            ['name' => 'Motor', 'slug' => 'motor'],
        ];

        Category::insert($categories);
    }
}
