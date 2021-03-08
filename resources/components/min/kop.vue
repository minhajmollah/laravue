<template>
  <div class="hello">
<button @click="add">click</button>
<br/><br/>
<table>
<tr>
<th>id</th>
<th>name</th>

</tr>
<tr v-for="(users,index) in users" :key="index"><td>{{users.id}}</td>
<td>{{users.username}}</td></tr>

</table>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'HelloWorld',
data:function(){
return {
users:[]
 }                  
 },                          




methods:{
  add:function(){

axios.get('http://127.0.0.1:8000/api/users')
.then(response=>{
console.log(response.data.users)
this.users=response.data.users
})
.catch(function(response){
  console.log(response);
})

  }
},
    mounted:function(){
       console.log(this.users)                 
                    }
}
</script>

<style>
table{
width:40%;
border:1px solid black;

}
table tr th,td{
padding:6px 10px;
border:1px solid green;
}
</style>