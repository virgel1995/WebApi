<template>
 <section id="contact" class="py-5 bg-dark">
    <div class="container">
      <h2 class="text-center text-capitalize serv-head ">Contact Us</h2>
      <div class="row my-3">
        <!-- map col left start -->
        <div class="col-md-6 col-sm-12 w-100">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13708.233326469479!2d31.27408075!3d30.800998449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1615583172481!5m2!1sar!2seg"
            class="conatct-map w-100" allowfullscreen="" loading="lazy"></iframe>
        </div><!-- col-6 map -->


        <div class="col-md-6 col-sm-12 w-100  mt-2">
          <div class="card card-mine text-center">

            <div class="card-header">
              <h1 class="text-uppercase text-dark">Contact Information</h1>
            </div><!-- card-header -->
            <div class="card-body">
              <form action="">

                <!-- ########## input-group 1 start name-->
                <div class="input-group my-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="input-text"><i class="fas fa-user"></i></span>
                  </div><!-- input-group-prepend  -->
                  <input type="text" id="text" class="form-control form-control-large" placeholder="Your Name Here"
                    required>
                </div>
                <!-- ########## input-group 1 end  name-->

                <!-- ########## input-group 2 start  phone-->
                <div class="input-group my-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="input-phone"><i class="fas fa-phone"></i></span>
                  </div><!-- input-group-prepend  -->
                  <input type="text" id="phone" class="form-control form-control-large"
                    placeholder="Your Phone Number Here" required>
                </div>
                <!-- ########## input-group 2 end phone-->

                <!-- ########## input-group 3 start -->
                <div class="input-group my-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="input-email"><i class="fas fa-envelope"></i></span>
                  </div><!-- input-group-prepend  -->
                  <input type="email" id="text" class="form-control form-control-large" placeholder="Your email here"
                    required>
                </div>
                <!-- ########## input-group 3 end -->

                <button type="submit" class="btn btn-lg  hvr-round-corners text-uppercase contact-btn-2 "><i
                    class="fas fa-hand-point-right "></i>Submit </button>
              </form>
            </div><!-- card-body -->
          </div><!-- card -->
        </div><!-- col-6 contact sender -->
      </div><!-- row -->
    </div><!-- container -->
  </section>
	</template>