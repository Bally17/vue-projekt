<script setup>
import gallerySlider from '@/components/gallery-slider.vue'
import blogHomepage from '@/components/blog-homepage.vue';
import 'bootstrap'

</script>
<template>
  <div class="sections">
  <gallerySlider></gallerySlider>
  <section class="call-to-action">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-content">
              <div class="row">
                <div class="col-lg-8">
                  <span>Stand Blog HTML5 Template</span>
                  <h4>Creative HTML Template For Bloggers!</h4>
                </div>
                <div class="col-lg-4">
                  <div class="main-button">
                    <a rel="nofollow" href="https://templatemo.com/tm-551-stand-blog" target="_parent" style="text-decoration: none; color: white; ">Download Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <blogHomepage></blogHomepage>
</template>

<style>
.sections{
  display: flex;
  justify-content:center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  gap: 30px;
}


.call-to-action .main-content {
	padding: 40px;
	background-image: url(../images/cta-bg.jpg);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
  border-radius: 20px;
}

.call-to-action .main-content span {
	color: #f48840;
	font-size: 18px;
	font-weight: 900;
	letter-spacing: 0.5px;
}

.call-to-action .main-content h4 {
	margin-bottom: 0px;
	margin-top: 12px;
	color: #fff;
	font-size: 15px;
	font-weight: 900;
	letter-spacing: 0.25px;
}

.call-to-action .main-content .main-button {
	text-align: right;
	margin-top: 12px;
  
}

</style>
