<template>
    <!-- Sidebar -->
    <ul class="sidebar navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="dropdown-item" exact>
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Dashboard</span></router-link>
      </li>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
          <h6 class="dropdown-header">Login Screens:</h6>
          <router-link to="/" class="dropdown-item">welcome</router-link exact>
   
          <a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
          <div class="dropdown-divider"></div>
          <h6 class="dropdown-header">Other Pages:</h6>
          <a class="dropdown-item" href="404.html">404 Page</a>
          <a class="dropdown-item" href="blank.html">Blank Page</a>
        </div>
      </li>
      <li class="nav-item">
          <router-link to="/catagories" class="dropdown-item" exact>
          <i class="fas fa-fw fa-chart-area"></i>
          <span>catgorey</span></router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="tables.html">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span></a>
      </li>
    </ul>
</template>


