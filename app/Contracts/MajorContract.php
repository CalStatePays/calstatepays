<?php

namespace App\Contracts;

interface MajorContract
{
    public function getAllHegisCodes(): array;

    public function getAllFieldOfStudies(): array;
}