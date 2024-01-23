<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name'           => 'Super Admin',
            'email'          => 'admin@test.com',
            'password'       => Hash::make('admin1234'),
        ]);
        $admin->assignRole('admin');
    }
}
