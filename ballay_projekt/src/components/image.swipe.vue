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
    <swiper-slide class="swiper-image" v-for="(images, index) in images" :key="index">
      <img :src="images.src" :alt="images.alt">
        <div>
          <div class="carousel-caption d-none d-md-block">
            <div class="meta-category">
              <span>{{images.title}}</span>
            </div>
            <RouterLink to="/post-details" class="RouterLink">
                <h4>{{images.title}}</h4>
            </RouterLink>
            <ul class="post-info">
              <li><a href="#">{{images.author}}</a></li>
              <li><a href="#">{{images.date}}</a></li>
              <li><a href="#">{{images.comment}} Comments</a></li>
            </ul>
          </div>
        </div>
    </swiper-slide>
  </swiper>
  </template>
  <script>
  import { RouterLink } from 'vue-router'
  import { myStore } from '@/stores/store.js'
  import { defineComponent } from 'vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { Pagination } from 'swiper/modules';
  
    export default defineComponent({
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const img = myStore();
        return {
          modules: [Pagination],
          images: img.images,
        };
      },
      data() {
    return {
      modules: [Pagination],
    };
  },
    })
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
  