<template>
<div>

<router-view></router-view>
</div>

</template>


<script>
import navbar  from '../navbar.vue'

  export default {
components:{
navbar,

},

mounted:function(){
var token=localStorage.getItem('AToken') 
if(!token){
this.$router.push('/login')
}

}
}


</script>