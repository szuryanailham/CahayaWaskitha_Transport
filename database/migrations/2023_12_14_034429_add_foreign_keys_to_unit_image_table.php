<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('unit_image', function (Blueprint $table) {
            $table->foreign(['unit_id'], 'unit_image_ibfk_1')->references(['id'])->on('unit')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('unit_image', function (Blueprint $table) {
            $table->dropForeign('unit_image_ibfk_1');
        });
    }
};
