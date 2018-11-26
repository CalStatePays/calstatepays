<?php

namespace App\Services;

use App\Models\University;
use App\Contracts\PowerUsersContract;
use App\Models\PowerUsersData;

class PowerUsersService implements PowerUsersContract
{
    public function getPowerUserDataByUniversity($university, $path_id)
    {
        $university = University::where('short_name', $university)
            ->where('opt_in', 1)
            ->firstOrFail();

        $universityId = $university->id;

        $data = PowerUsersData::where('university_id', $universityId)->where('path_id', $path_id)->firstOrFail();
        $test['iframe_string'] = $data['iframe_string'];

        return $test;
    }
}