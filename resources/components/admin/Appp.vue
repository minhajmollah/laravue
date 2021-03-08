<template>
  <div>
<Header></Header>

  <div id="wrapper">
<Slidebar></Slidebar>


    <div id="content-wrapper">

      <div class="container-fluid">

        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Overview</li>
        </ol>

 <router-view></router-view>





<Footer></Footer>
      </div>
      <!-- /.container-fluid -->

  

    </div>
    <!-- /.content-wrapper -->

  </div>
</div>
</template>

<script>
import Header  from './Header.vue'
import Footer  from './Footer.vue'
import Slidebar  from './Slidebar.vue'
  export default {
components:{
Header,
Footer,
Slidebar
}


  };
</script>