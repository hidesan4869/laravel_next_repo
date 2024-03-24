<?php

namespace App\Http\Controllers;

use App\Models\Samples;
use Illuminate\Http\Request;

class SamplesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(['status' => 'ok']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Samples $samples)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Samples $samples)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Samples $samples)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Samples $samples)
    {
        //
    }
}
