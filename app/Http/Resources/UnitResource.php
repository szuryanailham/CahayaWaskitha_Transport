<?php

namespace App\Http\Resources;

use App\Models\UnitImage;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UnitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'price' => $this->price,
            'capacity' => $this->capacity,
            'category' => $this->category->name,
            'featured_image' => UnitImage::where('id', $this->featured_image_id)->first()->image ?? null,
            'images' => UnitImage::where('unit_id', $this->id)->get(),
            'is_deleted' => $this->deleted_at ? true : false,
        ];
    }
}
