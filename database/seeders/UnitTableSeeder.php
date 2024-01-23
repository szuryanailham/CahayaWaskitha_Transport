<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Unit;

class UnitTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // 'category_id',
        // 'name',
        // 'featured_image_id',
        // 'description',
        // 'price',
        // 'capacity',
        // 'status',

        $units = [
            [
                'category_id' => 1,
                'name' => 'Alphard',
                'slug' => 'alphard',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 500000,
                'capacity' => 5,
                'status' => 1,
            ],
            [
                'category_id' => 1,
                'name' => 'Camry',
                'slug' => 'camry',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 300000,
                'capacity' => 3,
                'status' => 1,
            ],
            [
                'category_id' => 1,
                'name' => 'Land Cruiser',
                'slug' => 'land-cruiser',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 500000,
                'capacity' => 5,
                'status' => 1,
            ],
            [
                'category_id' => 2,
                'name' => 'Small Bus',
                'slug' => 'small-bus',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 1000000,
                'capacity' => 16,
                'status' => 1,
            ],
            [
                'category_id' => 2,
                'name' => 'Medium Bus',
                'slug' => 'medium-bus',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 1500000,
                'capacity' => 35,
                'status' => 1,
            ],
            [
                'category_id' => 2,
                'name' => 'Big Bus',
                'slug' => 'big-bus',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 2000000,
                'capacity' => 48,
                'status' => 1,
            ],
            [
                'category_id' => 3,
                'name' => 'Beat',
                'slug' => 'beat',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 100000,
                'capacity' => 2,
                'status' => 1,
            ],
            [
                'category_id' => 3,
                'name' => 'Scoopy',
                'slug' => 'scoopy',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 100000,
                'capacity' => 2,
                'status' => 1,
            ],
            [
                'category_id' => 3,
                'name' => 'Supra X',
                'slug' => 'supra-x',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 100000,
                'capacity' => 2,
                'status' => 1,
            ],
        ];

        Unit::insert($units);
    }
}
