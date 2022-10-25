<template>
  <div >
 <section id="about" class="about py-5">
    <div class="container">
              <router-link class="nav-link" to="/">Home</router-link>
      <div class="row">
        <div class="col-md-6 my-4">
          <h2 class="text-uppercase display-3">
            Work Steps
          </h2>

          <!-- input 1 start ##### -->
          <div class="input-group mt-3 w-25">
            <div class="input-group-prepend">
              <div class="input-group-text bg-dark" id="btnGroupAddon"><i class="fas fa-check step-icon-1"></i>
              </div>
            </div>
            <!--  to change text change place holder -->
            <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet"
              aria-label="Lorem ipsum dolor sit amet" aria-describedby="btnGroupAddon" disabled>
          </div>
          <!-- input 1 end ##### -->

          <!-- input 2 start ##### -->
          <div class="input-group mt-3 w-40">
            <div class="input-group-prepend">
              <div class="input-group-text bg-dark" id="btnGroupAddon"><i class="fas fa-check step-icon-2"></i>
              </div>
            </div>
            <!--  to change text change place holder -->
            <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet"
              aria-label="Lorem ipsum dolor sit amet" aria-describedby="btnGroupAddon" disabled>
          </div>
          <!-- input 2 end ##### -->

          <!-- input 3 start ##### -->
          <div class="input-group mt-3 w-60">
            <div class="input-group-prepend">
              <div class="input-group-text bg-dark" id="btnGroupAddon"><i class="fas fa-check step-icon-3"></i>
              </div>
            </div>
            <!--  to change text change place holder -->
            <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet"
              aria-label="Lorem ipsum dolor sit amet" aria-describedby="btnGroupAddon" disabled>
          </div>
          <!-- input 3 end ##### -->

          <!-- input 4 start ##### -->
          <div class="input-group mt-3 w-80">
            <div class="input-group-prepend">
              <div class="input-group-text bg-dark" id="btnGroupAddon"><i class="fas fa-check step-icon-4"></i>
              </div>
            </div>
            <!--  to change text change place holder -->
            <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet"
              aria-label="Lorem ipsum dolor sit amet" aria-describedby="btnGroupAddon" disabled>
          </div>
          <!-- input 4 end ##### -->

          <!-- input 5 start ##### -->
          <div class="input-group mt-3 w-90">
            <div class="input-group-prepend">
              <div class="input-group-text bg-dark" id="btnGroupAddon"><i class="fas fa-check-double step-icon-5"></i>
              </div>
            </div>
            <!--  to change text change place holder -->
            <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet"
              aria-label="Lorem ipsum dolor sit amet" aria-describedby="btnGroupAddon" disabled>
          </div>
          <!-- input 5 end ##### -->


          <a href="" class="btn main-btn my-4 text-acpitalize hvr-round-corners">lorem more</a>
        </div><!-- col-md-6 left -->

        <div class="col-md-6 about-pictures my-4 d-none d-lg-block">
          <img src="@/assets/avatar.jpg" alt="" class="img-1 img-thumbnail about-image"><!-- img 1 -->

          <img src="@/assets/avatar.jpg" alt="" class="img-2 img-thumbnail about-image"><!-- img 2 -->

          <img src="@/assets/avatar.jpg" alt="" class="img-3 img-thumbnail about-image"><!-- img 3 -->

          <img src="@/assets/avatar.jpg" alt="" class="img-4 img-thumbnail about-image"><!-- img 4 -->

          <img src="@/assets/avatar.jpg" alt="" class="img-5 img-thumbnail about-image"><!-- img 5 -->

        </div><!-- col-md-6 right hidden on phone device -->
      </div><!-- row -->
    </div><!-- container -->
  </section><!-- end #about -->
  </div>
	</template>