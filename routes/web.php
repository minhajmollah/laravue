<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/curd','App\Http\controllers\Curdcontroller@view');
Route::post('/save','App\Http\controllers\Curdcontroller@save');
Route::get('/all','App\Http\controllers\Curdcontroller@get');
Route::post('/update{id}','App\Http\controllers\Curdcontroller@update');
Route::post('/delete{id}','App\Http\controllers\Curdcontroller@delete');
Route::get('/com','App\Http\controllers\usercontroller@cm');
