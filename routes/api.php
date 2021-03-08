<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/users','App\Http\controllers\usercontroller@user');
Route::get('/details','App\Http\controllers\usercontroller@details')->middleware('auth:api');
Route::get('/com','App\Http\controllers\usercontroller@cm');
Route::post('/task','App\Http\controllers\usercontroller@task');
Route::get('/get','App\Http\controllers\routerController@index');

Route::post('/register','App\Http\controllers\apiController@register');
Route::post('/login','App\Http\controllers\apiController@login');
