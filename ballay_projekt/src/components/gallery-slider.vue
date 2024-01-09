<template>
  <div class="main-banner header-text">
    <div id="gallery-slider" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" style="margin-top: 100px;">
        <div v-for="(item, index) in galleryItems" :key="index" :class="{ 'carousel-item': true, active: index > 3 }">
          <img :src="item.image" class="d-block w-100" alt="Slide Image">
          <div class="carousel-caption d-none d-md-block">
            <div class="meta-category">
              <span>{{ item.category }}</span>
            </div>
            <a :href="item.link" style="text-decoration: none;"><h4>{{ item.title }}</h4></a>
            <ul class="post-info">
              <li><a href="#">{{ item.author }}</a></li>
              <li><a href="#">{{ item.date }}</a></li>
              <li><a href="#">{{ item.comments }} Comments</a></li>
            </ul>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#gallery-slider" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#gallery-slider" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const galleryItems = [
  {
    image: './images/banner-item-01.jpg',
    category: 'Fashion',
    title: 'Morbi dapibus condimentum',
    link: 'post-details.html',
    author: 'Admin',
    date: 'May 12, 2020',
    comments: 12,
  },
  {
    image: './images/banner-item-02.jpg',
    category: 'Nature',
    title: 'Donec porttitor augue at velit',
    link: 'post-details.html',
    author: 'Admin',
    date: 'May 14, 2020',
    comments: 24,
  },
  {
    image: './images/banner-item-03.jpg',
    category: 'Lifestyle',
    title: 'Best HTML Templates on TemplateMo',
    link: 'post-details.html',
    author: 'Admin',
    date: 'May 16, 2020',
    comments: 36,
  },
  // Přidat další položky podle potřeby
  {
    image: './images/banner-item-04.jpg',
    category: 'Technology',
    title: 'Another Lorem ipsum dolor sit',
    link: 'post-details.html',
    author: 'Admin',
    date: 'May 18, 2020',
    comments: 48,
  },
  {
    image: './images/banner-item-05.jpg',
    category: 'Travel',
    title: 'Another Lorem ipsum dolor sit',
    link: 'post-details.html',
    author: 'Admin',
    date: 'May 20, 2020',
    comments: 60,
  },
  {
    image: './images/banner-item-06.jpg',
    category: 'Food',
    title: 'Another Lorem ipsum dolor sit',
    link: 'post-details.html',
    author: 'Admin',
    date: 'May 22, 2020',
    comments: 72,
  },
];
</script>

<style scoped>
/* Přizpůsobit styly podle potřeby */
#gallery-slider {
  width: 420px;
  height: 520px;
  margin-top: 20px;
  margin-bottom: 0;
}

.carousel-inner {
  display: flex;
  
}



.carousel-inner img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.carousel-caption {
  
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  
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
