<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" >
                    <span class="navbar-toggler-icon"></span>
                </button>
  <a class="navbar-brand" href="#">Navbar</a>

 <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
     <router-link to="/" class="nav-link text-light" exact>Home
      </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
     
</ul>
<ul class="navbar-nav  ml-auto">

  <li class="nav-item" v-if="token">
        <router-link to="/logout" class="nav-link text-light" exact>logout
      </router-link>
      </li>
  <li class="nav-item" v-if="token">
        <router-link to="/dashboard" class="nav-link text-light" exact>dashboard
      </router-link>
      </li>

 <li class="nav-item" v-for="(menu,i) in menu" :key="i" v-else>
 <router-link :to="menu.route" class="nav-link text-light" exact>{{menu.name}}
      </router-link>
      </li>

    </ul>

  </div>
</nav>



</template>

<script>
export default {


data:function(){
return {
menu:[
{name:'sing in',route:'/login'},
{name:'sing up',route:'/register'}

],
token:localStorage.getItem('AToken') 

}
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
