<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Unit;
use App\Models\UnitImage;

class UnitImageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // unit 1
        $data = UnitImage::create([
            'unit_id' => 1,
            'image' => '/units/Agya1.png',
        ],);

        Unit::where('id', 1)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 1,
                'image' => '/units/Agya2.png',
            ],
            [
                'unit_id' => 1,
                'image' => '/units/Agya3.jpeg',
            ],
            [
                'unit_id' => 1,
                'image' => '/units/Agya4.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 2
        $data = UnitImage::create([
            'unit_id' => 2,
            'image' => '/units/Alphard1.png',
        ],);

        Unit::where('id', 2)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 2,
                'image' => '/units/Alphard2.png',
            ],
            [
                'unit_id' => 2,
                'image' => '/units/Alphard3.jpeg',
            ],
            [
                'unit_id' => 2,
                'image' => '/units/Alphard4.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 3
        $data = UnitImage::create([
            'unit_id' => 3,
            'image' => '/units/Ayla1.png',
        ],);

        Unit::where('id', 3)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 3,
                'image' => '/units/Ayla2.png',
            ],
            [
                'unit_id' => 3,
                'image' => '/units/Ayla3.jpeg',
            ],
            [
                'unit_id' => 3,
                'image' => '/units/Ayla4.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 4
        $data = UnitImage::create([
            'unit_id' => 4,
            'image' => '/units/Calya1.png',
        ],);

        Unit::where('id', 4)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 4,
                'image' => '/units/Calya2.png',
            ],
            [
                'unit_id' => 4,
                'image' => '/units/Calya3.jpeg',
            ],
            [
                'unit_id' => 4,
                'image' => '/units/Calya4.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 5
        $data = UnitImage::create([
            'unit_id' => 5,
            'image' => '/units/Landcruiser1.png',
        ],);

        Unit::where('id', 5)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 5,
                'image' => '/units/Landcruiser2.png',
            ],
            [
                'unit_id' => 5,
                'image' => '/units/Landcruiser3.jpeg',
            ],
            [
                'unit_id' => 5,
                'image' => '/units/Landcruiser4.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 6
        $data = UnitImage::create([
            'unit_id' => 6,
            'image' => '/units/Hiace1.png',
        ],);

        Unit::where('id', 6)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 6,
                'image' => '/units/Hiace2.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 7
        $data = UnitImage::create([
            'unit_id' => 7,
            'image' => '/units/Big Bus 481.png',
        ],);

        Unit::where('id', 7)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 7,
                'image' => '/units/Big Bus 482.png',
            ],
            [
                'unit_id' => 7,
                'image' => '/units/Big Bus 483.png',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 8
        $data = UnitImage::create([
            'unit_id' => 8,
            'image' => '/units/Luxury Bus Mercy1.png',
        ],);

        Unit::where('id', 8)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 8,
                'image' => '/units/Luxury Bus Mercy2.jpeg',
            ],
            [
                'unit_id' => 8,
                'image' => '/units/Luxury Bus Mercy3.jpeg',
            ],
            [
                'unit_id' => 8,
                'image' => '/units/Luxury Bus Mercy4.jpeg',
            ],
            [
                'unit_id' => 8,
                'image' => '/units/Luxury Bus Mercy5.jpeg',
            ],
            [
                'unit_id' => 8,
                'image' => '/units/Luxury Bus Mercy6.jpeg',
            ],
            [
                'unit_id' => 8,
                'image' => '/units/Luxury Bus Mercy7.jpeg',
            ],
            [
                'unit_id' => 8,
                'image' => '/units/Luxury Bus Mercy8.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 9
        $data = UnitImage::create([
            'unit_id' => 9,
            'image' => '/units/Medium Bus 311.png',
        ],);

        Unit::where('id', 9)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 9,
                'image' => '/units/Medium Bus 312.jpeg',
            ],
            [
                'unit_id' => 9,
                'image' => '/units/Medium Bus 313.jpeg',
            ],
            [
                'unit_id' => 9,
                'image' => '/units/Medium Bus 314.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 10
        $data = UnitImage::create([
            'unit_id' => 10,
            'image' => '/units/Medium Bus 351.png',
        ],);

        Unit::where('id', 10)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 10,
                'image' => '/units/Medium Bus 352.jpeg',
            ],
            [
                'unit_id' => 10,
                'image' => '/units/Medium Bus 353.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 11
        $data = UnitImage::create([
            'unit_id' => 11,
            'image' => '/units/Medium Bus Luxury1.png',
        ],);

        Unit::where('id', 11)->update(['featured_image_id' => $data->id]);

        $unitImages = [
            [
                'unit_id' => 11,
                'image' => '/units/Medium Bus Luxury2.jpeg',
            ],
            [
                'unit_id' => 11,
                'image' => '/units/Medium Bus Luxury3.jpeg',
            ],
            [
                'unit_id' => 11,
                'image' => '/units/Medium Bus Luxury4.jpeg',
            ],
            [
                'unit_id' => 11,
                'image' => '/units/Medium Bus Luxury5.jpeg',
            ],
        ];

        UnitImage::insert($unitImages);

        // unit 12
        $data = UnitImage::create([
            'unit_id' => 12,
            'image' => '/units/Beat.png',
        ],);

        Unit::where('id', 12)->update(['featured_image_id' => $data->id]);

        // unit 13
        $data = UnitImage::create([
            'unit_id' => 13,
            'image' => '/units/Scoopy.png',
        ],);

        Unit::where('id', 13)->update(['featured_image_id' => $data->id]);

        // unit 14
        $data = UnitImage::create([
            'unit_id' => 14,
            'image' => '/units/Supra X.png',
        ],);

        Unit::where('id', 14)->update(['featured_image_id' => $data->id]);
    }
}
