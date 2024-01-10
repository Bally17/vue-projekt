<template>
    <swiper
      :slidesPerView="3"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :loop="true"
      
      class="mySwiper"
    >
    <swiper-slide class="swiper-image">
        <img src="../assets/images/banner-item-01.jpg" alt="">
        <div>
          <div class="carousel-caption d-none d-md-block">
            <div class="meta-category">
              <span>Fashion</span>
            </div>
            <RouterLink to="/post-details" class="RouterLink">
                <h4>Morbi dapibus condimentum</h4>
            </RouterLink>
            <ul class="post-info">
              <li><a href="#">Admin</a></li>
              <li><a href="#">May 12, 2020</a></li>
              <li><a href="#">12 Comments</a></li>
            </ul>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide class="swiper-image">
        <img src="../assets/images/banner-item-02.jpg" alt="">
        <div>
          <div class="carousel-caption d-none d-md-block">
            <div class="meta-category">
              <span>Nature</span>
            </div>
            <RouterLink to="/post-details" class="RouterLink">
                <h4>Donec porttitor augue at velit</h4>
            </RouterLink>
            <ul class="post-info">
              <li><a href="#">Admin</a></li>
              <li><a href="#">May 14, 2020</a></li>
              <li><a href="#">24 Comments</a></li>
            </ul>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide class="swiper-image">
        <img src="../assets/images/banner-item-03.jpg" alt="">
        <div>
          <div class="carousel-caption d-none d-md-block">
            <div class="meta-category">
              <span>Lifestyle</span>
            </div>
            <RouterLink to="/post-details" class="RouterLink">
                <h4>Best HTML Templates on TemplateMo</h4>
            </RouterLink>
            <ul class="post-info">
              <li><a href="#">Admin</a></li>
              <li><a href="#">May 16, 2020</a></li>
              <li><a href="#">36 Comments</a></li>
            </ul>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide class="swiper-image">
        <img src="../assets/images/banner-item-04.jpg" alt="">
        <div>
          <div class="carousel-caption d-none d-md-block">
            <div class="meta-category">
              <span>Fashion</span>
            </div>
            <RouterLink to="/post-details" class="RouterLink">
                <h4>Responsive and Mobile Ready Layouts</h4>
            </RouterLink>
            <ul class="post-info">
              <li><a href="#">Admin</a></li>
              <li><a href="#">May 18, 2020</a></li>
              <li><a href="#">48 Comments</a></li>
            </ul>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide class="swiper-image">
        <img src="../assets/images/banner-item-05.jpg" alt="">
        <div>
          <div class="carousel-caption d-none d-md-block">
            <div class="meta-category">
              <span>Nature</span>
            </div>
            <RouterLink to="/post-details" class="RouterLink">
                <h4>Cras congue sed augue id ullamcorper</h4>
            </RouterLink>
            <ul class="post-info">
              <li><a href="#">Admin</a></li>
              <li><a href="#">May 24, 2020</a></li>
              <li><a href="#">64 Comments</a></li>
            </ul>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide class="swiper-image">
        <img src="../assets/images/banner-item-06.jpg" alt="">
        <div>
          <div class="carousel-caption d-none d-md-block">
            <div class="meta-category">
              <span>Lifestyle</span>
            </div>
            <RouterLink to="/post-details" class="RouterLink">
                <h4>Suspendisse nec aliquet ligula</h4>
            </RouterLink>
            <ul class="post-info">
              <li><a href="#">Admin</a></li>
              <li><a href="#">May 26, 2020</a></li>
              <li><a href="#">72 Comments</a></li>
            </ul>
          </div>
        </div>
    </swiper-slide>
  </swiper>
  </template>
  <script>
  import { RouterLink } from 'vue-router'
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination],
        };
      },
    };
  </script>
  <style scoped>
  .swiper-image img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-top: 100px;
  }

  
  .slide-text {
    
    margin-top: 10px; /* Prispôsobte výšku medzery podľa potreby */
  }
  .RouterLink{
    text-decoration: none;
  }
  .carousel-caption {
  
  border-radius: 5px;
  padding: 20px;
  text-align: left;
}

.carousel-caption h4 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
  
  
}

.carousel-caption .meta-category span {
  color: #f48840;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.25px;
}

.carousel-caption ul li {
  display: inline-block;
  margin-right: 8px;
}

.carousel-caption ul li:after {
  content: '|';
  color: #fff;
  margin-left: 8px;
  
}

.carousel-caption ul li:last-child::after {
  display: none;
}

.carousel-caption ul li a {
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  transition: all .3s;
  text-decoration: none;
}

.carousel-caption ul li a:hover {
  color: #f48840;
}
</style>
  