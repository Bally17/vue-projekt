<script setup>
import gallerySlider from '@/components/gallery-slider.vue'
import blogHomepage from '@/components/blog-homepage.vue';
import secondBanner from '@/components/second-banner.vue';
import 'bootstrap'

</script>
<template>
  <gallerySlider/>
  <secondBanner msg="Stand Blog HTML5 Template" msg2="Creative HTML Template For Bloggers!" />
  <blogHomepage/>
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
