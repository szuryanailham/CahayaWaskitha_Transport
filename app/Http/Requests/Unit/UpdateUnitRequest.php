<?php

namespace App\Http\Requests\Unit;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUnitRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => ['required', 'exists:category,id'],
            'name' => ['required', 'string', 'max:255', 'unique:unit,name,' . $this->unit->id],
            'description' => ['nullable', 'string', 'max:255'],
            'price' => ['required', 'numeric'],
            'capacity' => ['required', 'numeric'],
            'image' => ['array'],
            'image.*' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:10240'],
        ];
    }
}
