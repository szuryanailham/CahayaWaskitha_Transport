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
            'featured_image' => UnitImage::where('unit_id', $this->id)->first()->url ?? null,
            'images' => UnitImage::where('unit_id', $this->id)->get(),
        ];
    }
}
