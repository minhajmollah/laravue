<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
class apiController extends Controller
{
  public function register(Request $request){

$validator= Validator::make($request->all(),[
     	'name' => 'required',
     	'email' =>  ['required', 'unique:users'],
     	'password' => 'required',
     ]);
 if($validator->fails()){
     return response()->json($validator->errors(),202);
     
 }
 $user=new User;
 $user->name=$request->name;
 $user->email=$request->email;
 $user->password= bcrypt($request->password);
 $user->save();
 $http=new Client;
 $response=$http->post('http://localhost/Dreamtalk/oauth/token',[
     'form_params'=>[
         'grant_type'=>'password',
          'client_id'=>'1',
         'client_secret'=>'M0gXwyLJXbmIzxCOi75ykjVZue6b0W9YDhzWhrlg',
         'username'=>$request->email,
         'password'=>$request->password,
         'scope'=>'',
        
     ],
     
 ]);
 return json_decode((string) $response->getbody(),true);
  }
  public function login(Request $request){
      $request->validate([
     
     	'email' => 'required',
     	'password' => 'required',
     ]);
      $user=User::where('email',$request->email)->first();
      if(!$user){
          return response(['data'=>'user not found']);
      }
      if(Hash::check($request->password,$user->password)){
           $http=new Client;
 $response=$http->post('http://localhost/Dreamtalk/oauth/token',[
     'form_params'=>[
         'grant_type'=>'password',
          'client_id'=>'1',
         'client_secret'=>'M0gXwyLJXbmIzxCOi75ykjVZue6b0W9YDhzWhrlg',
         'username'=>$request->email,
         'password'=>$request->password,
         'scope'=>'',
        
     ],
     
 ]);
 return json_decode((string) $response->getbody(),true);
          
      }
      
  }
}
