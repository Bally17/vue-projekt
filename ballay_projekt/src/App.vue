<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap'
</script>

<template>
  <header class="background-header">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <RouterLink to="/" class="nav-link"><h2>Stand Blog<em>.</em></h2></RouterLink>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <RouterLink to="/" class="nav-link">Home
                <span class="sr-only">(current)</span>
              </RouterLink>
            </li> 
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">About us</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/blog-entries" class="nav-link">Blog Entries</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/post-details" class="nav-link">Post Details</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact-us" class="nav-link">Contact Us</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
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
	border-radius: 0px;
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
</style>
