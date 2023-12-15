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
        Schema::table('unit', function (Blueprint $table) {
            $table->foreign('featured_image_id')->references('id')->on('unit_image')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('category_id')->references('id')->on('category')->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('unit', function (Blueprint $table) {
            $table->dropForeign(['featured_image_id']);
            $table->dropForeign(['category_id']);
        });
    }
};
