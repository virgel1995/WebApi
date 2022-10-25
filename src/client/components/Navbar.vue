<template>

   <nav class="navbar navbar-expand-lg ">
    <a href="" class="navbar-brand text-uppercase primary-color"><img class="logo" src="@/assets/avatar.jpg" alt=""> New Step</a>
    <!-- ######### navbar buttom start -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
      <div class="toggler-btn">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
    </button>
    <!-- ######### navbar buttom end -->

    <!-- #### navbar links  -->
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            site map
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#spicel-items">Latest Works</a>
            <a class="dropdown-item" href="#about">About</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#services">services</a>
            <a class="dropdown-item" href="#contact">Contact</a>
          </div>
        </li>
      </ul>
      <form action="" class="form-inline d-none d-lg-block mr-5">
        <button class="btn nav-btn text-capitalize hvr-round-corners" type="button">just link2</button>
      </form>



    </div>
    <!-- #### navbar links end  -->
  </nav>

						</template>