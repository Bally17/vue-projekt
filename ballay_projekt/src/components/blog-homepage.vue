<script setup>
import { RouterLink } from 'vue-router'
import sideBar from './side-bar.vue';
</script>
<template>
    <section class="blog-posts">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="all-blog-posts">
              <div class="row">
                <div class="col-lg-12">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="../assets/images/blog-post-01.jpg" alt="">
                    </div>
                    <div class="down-content">
                      <span>Lifestyle</span>
                      <RouterLink to="/post-details"><h4>Best Template Website for HTML CSS</h4></RouterLink>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 31, 2020</a></li>
                        <li><a href="#">12 Comments</a></li>
                      </ul>
                      <p>Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">Contact TemplateMo</a> for more info. Thank you.</p>
                      <div class="post-options">
                        <div class="row">
                          <div class="col-6">
                            <ul class="post-tags">
                              <li><i class="bi bi-tags"></i></li>
                              <li><a href="#">Beauty</a>,</li>
                              <li><a href="#">Nature</a></li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul class="post-share">
                              <li><i class="bi bi-share"></i></li>
                              <li><a href="#">Facebook</a>,</li>
                              <li><a href="#"> Twitter</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="../assets/images/blog-post-02.jpg" alt="">
                    </div>
                    <div class="down-content">
                      <span>Healthy</span>
                      <RouterLink to="/post-details"><h4>Etiam id diam vitae lorem dictum</h4></RouterLink>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 24, 2020</a></li>
                        <li><a href="#">36 Comments</a></li>
                      </ul>
                      <p>You can support us by contributing a little via PayPal. Please contact <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">TemplateMo</a> via Live Chat or Email. If you have any question or feedback about this template, feel free to talk to us. Also, you may check other CSS templates such as <a rel="nofollow" href="https://templatemo.com/tag/multi-page" target="_parent">multi-page</a>, <a rel="nofollow" href="https://templatemo.com/tag/resume" target="_parent">resume</a>, <a rel="nofollow" href="https://templatemo.com/tag/video" target="_parent">video</a>, etc.</p>
                      <div class="post-options">
                        <div class="row">
                          <div class="col-6">
                            <ul class="post-tags">
                              <li><i class="bi bi-tags"></i></li>
                              <li><a href="#">Best Templates</a>,</li>
                              <li><a href="#">TemplateMo</a></li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul class="post-share">
                              <li><i class="bi bi-share"></i></li>
                              <li><a href="#">Facebook</a>,</li>
                              <li><a href="#">Twitter</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="../assets/images/blog-post-03.jpg" alt="">
                    </div>
                    <div class="down-content">
                      <span>Fashion</span>
                      <RouterLink to="/post-details"><h4>Donec tincidunt leo nec magna</h4></RouterLink>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 14, 2020</a></li>
                        <li><a href="#">48 Comments</a></li>
                      </ul>
                      <p>Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.</p>
                      <div class="post-options">
                        <div class="row">
                          <div class="col-6">
                            <ul class="post-tags">
                              <li><i class="bi bi-tags"></i></li>
                              <li><a href="#">HTML CSS</a>,</li>
                              <li><a href="#">Photoshop</a></li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul class="post-share">
                              <li><i class="bi bi-share"></i></li>
                              <li><a href="#">Facebook</a>,</li>
                              <li><a href="#">Twitter</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="main-button">
                    <RouterLink to="/blog-entries" class="nav-link">View All Posts</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <sideBar />
        </div>
      </div>
    </section>
</template>
<style>
.main-button a {
	display: inline-block;
	background-color: #f48840;
	color: #fff;
	font-size: 13px;
	font-weight: 500;
	padding: 12px 20px;
	text-transform: uppercase;
	transition: all .3s;
    text-decoration: none;
}

.main-button a:hover {
	background-color: #fb9857;
}
.blog-posts {
	margin-top: 100px;
}

.blog-posts .blog-post {
	margin-bottom: 30px;
}

.blog-posts .blog-thumb img {
	width: 100%;
	overflow: hidden;
}

.blog-posts .down-content {
	padding: 40px;
	border-right: 1px solid #eee;
	border-left: 1px solid #eee;
	border-bottom: 1px solid #eee;
}

.blog-posts .down-content span {
	font-size: 18px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	font-weight: 900;
	color: #f48840;
}

.blog-posts .down-content h4 {
	font-size: 24px;
	text-transform: capitalize;
	letter-spacing: 0.5px;
	font-weight: 900;
	color: #20232e;
	margin: 10px 0px 12px 0px;
}

.blog-posts .down-content ul.post-info li {
	display: inline-block;
	margin-right: 8px;
}

.blog-posts .down-content ul.post-info li:after {
	content: '|';
	color: #aaa;
	margin-left: 8px;
}

.blog-posts .down-content h4 {
	font-size: 20px;
	letter-spacing: 0.25px;
}

.blog-posts .down-content a {
    text-decoration: none;
}

.grid-system .down-content ul.post-info li {
	margin-right: 3px;
}

.grid-system .down-content ul.post-info li:after {
	margin-left: 5px;
}

.blog-posts .down-content ul.post-info li:last-child::after {
	display: none;
}

.blog-posts .down-content ul.post-info li a {
	font-size: 14px;
	color: #aaa;
	font-weight: 400;
	transition: all .3s;
    text-decoration: none;
}

.blog-posts .down-content ul.post-info li a:hover {
	color: #f48840;
}

.blog-posts .down-content p {
	padding: 25px 0px;
	margin: 25px 0px;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
}

.blog-posts .down-content ul.post-share {
	text-align: right;
}

.blog-posts .down-content ul.post-tags li,
.blog-posts .down-content ul.post-share li {
	display: inline-block;
}

.blog-posts .down-content ul.post-tags li:first-child i,
.blog-posts .down-content ul.post-share li:first-child i {
	color: #f48840;
	margin-right: 5px;
}

.blog-posts .down-content ul.post-tags li,
.blog-posts .down-content ul.post-share li {
	color: #aaa;
}

.blog-posts .down-content ul.post-tags li a,
.blog-posts .down-content ul.post-share li a {
	font-size: 14px;
	color: #aaa;
	font-weight: 400;
	transition: all .3s;
}

.blog-posts .down-content ul.post-tags li a:hover,
.blog-posts .down-content ul.post-share li a:hover {
	color: #f48840;
}

.blog-posts .main-button a {
	height: 60px;
	line-height: 60px;
	padding: 0px;
	width: 100%;
	text-align: center;
}

ul.page-numbers {
	text-align: center;
}

ul.page-numbers li {
	display: inline-block;
	margin: 0px 5px;
}

ul.page-numbers li a {
	width: 50px;
	height: 50px;
	display: inline-block;
	text-align: center;
	line-height: 50px;
	font-size: 15px;
	color: #7a7a7a;
	border: 1px solid #eee;
	font-weight: 500;
	transition: all 0.3s;
    text-decoration: none;
}

ul.page-numbers li.active a {
	background-color: #f48840;
	border-color: #f48840;
	color: #fff;
}

ul.page-numbers li a:hover {
	color: #f48840;
}

.blog-posts .sidebar-heading h2 {
	font-size: 18px;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 0.5px;
	color: #20232e;
	border-bottom: 1px solid #eee;
	padding-bottom: 15px;
	margin-bottom: 25px;
}

.blog-posts .comments {
	margin-top: 30px;
}

.blog-posts .comments ul li {
	display: inline-block;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #eee;
}

.blog-posts .comments ul li.replied {
	padding-left: 130px;
}

.blog-posts .comments ul li:last-child {
	margin-bottom: 0px;
	padding-bottom: 0px;
	border-bottom: none;
}

.blog-posts .comments ul li .author-thumb {
	display: inline;
	float: left;
}

.blog-posts .comments ul li .author-thumb img {
	max-width: 100px;
	display: inline;
}

.blog-posts .comments ul li .right-content {
	margin-left: 130px;
}

.blog-posts .comments ul li .right-content h4 {
	color: #20232e;
	font-size: 19px;
	font-weight: 900;
	letter-spacing: 0.5px;
}

.blog-posts .comments ul li .right-content h4 span {
	font-size: 14px;
    color: #aaa;
	font-weight: 400;
	letter-spacing: 0.25px;
	margin-left: 20px;
}

.blog-posts .submit-comment {
	margin-top: 60px;
}

.blog-posts .submit-comment input {
	width: 100%;
	height: 46px;
	border: 1px solid #eee;
	font-size: 13px;
	text-transform: uppercase;
	font-weight: 500;
	color: #7a7a7a;
	outline: none;
	padding: 0px 15px;
	margin-bottom: 30px;
}

.blog-posts .submit-comment textarea {
	width: 100%;
	height: 46px;
	border: 1px solid #eee;
	font-size: 13px;
	text-transform: uppercase;
	font-weight: 500;
	color: #7a7a7a;
	outline: none;
	padding: 10px 15px;
	margin-bottom: 30px;
	height: 180px;
	max-height: 220px;
	max-width: 100%;
	min-width: 160px;
}

.blog-posts .submit-comment input::placeholder,
.blog-posts .submit-comment textarea::placeholder {
	color: #aaa;
}

.blog-posts .submit-comment button {
	display: inline-block;
	background-color: #f48840;
	color: #fff;
	font-size: 13px;
	font-weight: 500;
	padding: 12px 20px;
	text-transform: uppercase;
	transition: all .3s;
	border: none;
	outline: none;
}

.blog-posts .submit-comment button:hover {
	background-color: #fb9857;
}
</style>
