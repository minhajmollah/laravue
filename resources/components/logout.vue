<template>
<div>
<navbar></navbar>
<h3 class="mt-3">logout successfully</h3>
</div>
</template>

<script>
import navbar  from './navbar.vue'

  export default {

components:{
navbar,

},
created:function(){
localStorage.removeItem('AToken');
this.$router.push('/')
}


}
</script>