<?php

use Illuminate\Database\Seeder;

class Hegis_Categories_TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get("database/data/hegis_categories.json");
        $data = json_decode($json);
        foreach($data as $row){
            DB::table('hegis_categories')->insert([
                'category_name' => $row->category_name,
                'category_id'   => $row->category_id
            ]);
        };
    }
}
