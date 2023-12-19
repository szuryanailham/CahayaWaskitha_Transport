<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'no_order' => $this->no_order,
            'name' => $this->name,
            'address' => $this->address,
            'phone' => $this->phone,
            'unit' => $this->unit,
            'price' => $this->price,
            'pickup_address' => $this->pickup_address,
            'start_date' => $this->start_date,
            'start_time' => $this->start_time,
            'end_date' => $this->end_date,
            'end_time' => $this->end_time,
            'duration' => $this->duration,
            'total_price' => $this->total_price,
        ];
    }
}
