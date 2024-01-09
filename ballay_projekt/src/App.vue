<script setup>
import { useRoute,RouterLink, RouterView } from 'vue-router'
import 'bootstrap'
import footervue from './components/footer.vue';
const $route = useRoute();
</script>

<template>
  <header class="background-header">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <RouterLink to="/" class="nav-link"><h2>Stand Blog<em>.</em></h2></RouterLink>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" :class="{ 'active': $route.path === '/' }">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li> 
            <li class="nav-item" :class="{ 'active': $route.path === '/about' }">
              <RouterLink to="/about" class="nav-link">About us</RouterLink>
            </li>
            <li class="nav-item" :class="{ 'active': $route.path === '/blog-entries' }">
              <RouterLink to="/blog-entries" class="nav-link">Blog Entries</RouterLink>
            </li>
            <li class="nav-item" :class="{ 'active': $route.path === '/post-details' }">
              <RouterLink to="/post-details" class="nav-link">Post Details</RouterLink>
            </li>
            <li class="nav-item" :class="{ 'active': $route.path === '/contact-us' }">
              <RouterLink to="/contact-us" class="nav-link">Contact Us</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
  <footervue />
</template>

<style scoped>

.navbar-nav .nav-item.active .nav-link,
.navbar-nav .nav-item:hover .nav-link {
  color: #f48840!important;
}
header {
	position: absolute;
	z-index: 99999;
	width: 100%;
	height: 100px;
	background-color: #f7f7f7;
	-webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}
header .navbar {
	padding: 25px 0px;
}
.background-header .navbar {
	padding: 17px 0px;
}
.background-header {
	top: 0;
	height: 80px;
	position: fixed;
	box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
}
.background-header .navbar-brand h2 {
	color: #121212!important;
}
.background-header .navbar-nav a.nav-link {
	color: #1e1e1e!important;
}
.background-header .navbar-nav .nav-link:hover,
.background-header .navbar-nav .active>.nav-link,
.background-header .navbar-nav .nav-link.active,
.background-header .navbar-nav .nav-link.show,
.background-header .navbar-nav .show>.nav-link {
	color: #f48840!important;
}
.navbar .navbar-brand {
	float: 	left;
	margin-top: -12px;
	outline: none;
}
.navbar .navbar-brand h2 {
	color: #1e1e1e;
	text-transform: uppercase;
	font-size: 24px;
	font-weight: 900;
	-webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
}
.navbar .navbar-brand h2 em {
	font-size: 44px;
	font-style: normal;
	color: #f48840;
}
#navbarResponsive {
	z-index: 999;
}
.navbar-collapse {
	text-align: center;
}
.navbar .navbar-nav .nav-item {
	margin: 0px 15px;
}
.navbar .navbar-nav a.nav-link {
	text-transform: capitalize;
	font-size: 15px;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	color: #1e1e1e;
	transition: all 0.3s;
}
.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .active>.nav-link,
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link.show,
.navbar .navbar-nav .show>.nav-link {
	color: #f48840;
}
.navbar .navbar-toggler-icon {
	background-image: none;
}
.navbar .navbar-toggler {
	border-color: #fff;
	background-color: #f48840;	
	height: 46px;
	outline: none;
	border-radius: 10px;
	position: absolute;
	right: 30px;
	top: 25px;
}
.navbar .navbar-toggler-icon:after {
	content: '\f0c9';
	color: #fff;
	font-size: 18px;
	line-height: 30px;
	font-family: 'FontAwesome';
}
@media (min-width: 768px) {
    body {
      /* Adjust styles for screens with a minimum width of 768 pixels */
      margin: 0 auto; /* Center the content */
      max-width: 1200px; /* Set a maximum width for the content */
    }
}
@media (max-width: 992px) {
	.navbar .navbar-brand {
		position: absolute;
		left: 30px;
		top: 25px;
	}
	.background-header .navbar-brand,
	.background-header .navbar-toggler {
		top: 15px;
	}
	.navbar .navbar-brand {
		width: auto;
	}
	.navbar:after {
		display: none;
	}
	#navbarResponsive {
	    z-index: 99999;
	    position: absolute;
	    top: 80px;
	    left: 0;
	    width: 100%;
	    text-align: center;
	    background-color: #fff;
	    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
	}
	.navbar .navbar-nav .nav-item {
		border-bottom: 1px solid #eee;
	}
	.navbar .navbar-nav .nav-item:last-child {
		border-bottom: none;
	}
	.navbar .navbar-nav a.nav-link {
		padding: 15px 0px;
		color: #1e1e1e!important;
	}
	.navbar .navbar-nav .nav-link:hover,
	.navbar .navbar-nav .active>.nav-link,
	.navbar .navbar-nav .nav-link.active,
	.navbar .navbar-nav .nav-link.show,
	.navbar .navbar-nav .show>.nav-link {
		color: #f48840!important;
		border-bottom: none!important;
		padding-bottom: 15px;
	}
}
</style>
