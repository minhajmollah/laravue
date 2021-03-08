<template>
<div>

<router-view></router-view>
</div>

</template>


<script>
import navbar  from './navbar.vue'

  export default {

mounted:function(){
var token=localStorage.getItem('AToken') 
console.log(token)

}
  };
</script>

