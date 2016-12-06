<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$phones = [
    				[
			            'name' => 'iPhone',
			            'model' => '4',
			            'price' => 50,
			        ],
    				[
			            'name' => 'iPhone',
			            'model' => '5',
			            'price' => 150,
			        ],
    				[
			            'name' => 'iPhone',
			            'model' => '5s',
			            'price' => 250,
			        ],
    				[
			            'name' => 'iPhone',
			            'model' => '6s',
			            'price' => 320,
			        ],
    				];

        foreach ($phones as $phone) DB::table('phones')->insert($phone);
    }
}
