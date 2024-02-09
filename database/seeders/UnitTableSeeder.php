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
        $units = [
            [
                'category_id' => 1,
                'name' => 'Agya',
                'slug' => 'agya',
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
                'steering' => 'Auto',
            ],
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
                'steering' => 'Auto',
            ],
            [
                'category_id' => 1,
                'name' => 'Ayla',
                'slug' => 'ayla',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 250000,
                'capacity' => 3,
                'steering' => 'Manual',
            ],
            [
                'category_id' => 1,
                'name' => 'Calya',
                'slug' => 'calya',
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
                'steering' => 'Manual',
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
                'steering' => 'Auto',
            ],
            [
                'category_id' => 2,
                'name' => 'Hiace',
                'slug' => 'hiace',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 750000,
                'capacity' => 15,
                'steering' => 'Manual',
            ],
            [
                'category_id' => 2,
                'name' => 'Big Bus 48',
                'slug' => 'big-bus-48',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 2400000,
                'capacity' => 48,
                'steering' => 'Manual',
            ],
            [
                'category_id' => 2,
                'name' => 'Luxury Bus Mercy',
                'slug' => 'luxury-bus-mercy',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 1500000,
                'capacity' => 15,
                'steering' => 'Manual',
            ],
            [
                'category_id' => 2,
                'name' => 'Medium Bus 31',
                'slug' => 'medium-bus-31',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 1500000,
                'capacity' => 31,
                'steering' => 'Manual',
            ],
            [
                'category_id' => 2,
                'name' => 'Medium Bus 35',
                'slug' => 'medium-bus-35',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 1800000,
                'capacity' => 35,
                'steering' => 'Manual',
            ],
            [
                'category_id' => 2,
                'name' => 'Medium Bus Luxury',
                'slug' => 'medium-bus-luxury',
                'description' => 'Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla.
                Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula.
                Fusce fermentum iaculis nibh, at sodales leo maximus a.
                Nullam ultricies sodales nunc, in pellentesque lorem mattis quis.
                Cras imperdiet est in nunc tristique lacinia.
                Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
                'price' => 1200000,
                'capacity' => 12,
                'steering' => 'Manual',
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
                'steering' => 'Auto',
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
                'steering' => 'Auto',
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
                'steering' => 'Manual',
            ],
        ];

        Unit::insert($units);
    }
}
