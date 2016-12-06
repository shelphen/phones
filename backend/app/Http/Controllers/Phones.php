<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Models\Phone;

class Phones extends Controller
{
    public function Get() {
    	$data['phones'] = json_encode(Phone::all()->toArray());
    	return view('phones', $data);
    }
}
