<script setup>
import { RouterLink } from 'vue-router'
import sideBar from './side-bar.vue';
const blogPosts = [
  {
    image: './images/blog-post-02.jpg',
    category: 'Lifestyle',
    title: 'Aenean pulvinar gravida sem nec',
    author: 'Admin',
    date: 'May 12, 2020',
    comments: 10,
  }
];
const sidebarItems = [
  {
    image: './images/comment-author-01.jpg',
    author: 'Charles Kate',
    date: 'May 16, 2020',
    content: 'Fusce ornare mollis eros. Duis et diam vitae justo fringilla condimentum eu quis leo. Vestibulum id turpis porttitor sapien facilisis scelerisque. Curabitur a nisl eu lacus convallis eleifend posuere id tellus',
  },
  {
    image: './images/comment-author-02.jpg',
    author: 'Thirteen Man',
    date: 'May 20, 2020',
    content: 'In porta urna sed venenatis sollicitudin. Praesent urna sem, pulvinar vel mattis eget.',
  },
  {
    image: './images/comment-author-03.jpg',
    author: 'Belisimo Mama',
    date: 'May 21, 2020',
    content: 'Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula. Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.',
  }
];
</script>
<template>
    <section class="blog-posts grid-system">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="all-blog-posts">
              <div class="row">
                <div v-for="(post, index) in blogPosts" :key="index" class="col-lg-12">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img :src="post.image" alt="">
                    </div>
                    <div class="down-content">
                      <span>{{ post.category }}</span>
                      <a href="#"><h4>{{post.title}}</h4></a>
                      <ul class="post-info">
                        <li><a href="#">{{ post.author }}</a></li>
                        <li><a href="#">{{ post.date }}</a></li>
                        <li><a href="#">{{ post.comments }} Comments</a></li>
                      </ul>
                      <p>You can browse different tags such as <a rel="nofollow" href="https://templatemo.com/tag/multi-page" target="_parent">multi-page</a>, <a rel="nofollow" href="https://templatemo.com/tag/resume" target="_parent">resume</a>, <a rel="nofollow" href="https://templatemo.com/tag/video" target="_parent">video</a>, etc. to see more CSS templates. Sed hendrerit rutrum arcu, non malesuada nisi. Sed id facilisis turpis. Donec justo elit, dapibus vel ultricies in, molestie sit amet risus. In nunc augue, rhoncus sed libero et, tincidunt tempor nisl. Donec egestas, quam eu rutrum ultrices, sapien ante posuere nisl, ac eleifend eros orci vel ante. Pellentesque vitae eleifend velit. Etiam blandit felis sollicitudin vestibulum feugiat.
                      <br><br>Donec tincidunt leo nec magna gravida varius. Suspendisse felis orci, egestas ac sodales quis, venenatis et neque. Vivamus facilisis dignissim arcu et blandit. Maecenas finibus dui non pulvinar lacinia. Ut lacinia finibus lorem vel porttitor. Suspendisse et metus nec libero ultrices varius eget in risus. Cras id nibh at erat pulvinar malesuada et non ipsum. Suspendisse id ipsum leo.</p>
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
                              <li><a href="#"> Twitter</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="sidebar-item comments">
                    <div class="sidebar-heading">
                      <h2>4 comments</h2>
                    </div>
                    <div class="content">
                      <ul>
                        <li v-for="(item, itemIndex) in sidebarItems" :key="itemIndex">
                          <div class="author-thumb">
                            <img :src="item.image" alt="">
                          </div>
                          <div class="right-content">
                            <h4>{{item.author}}<span>{{item.date}}</span></h4>
                            <p>{{ item.content }}</p>
                          </div>
                        </li>
                        <li class="replied">
                          <div class="author-thumb">
                            <img src="../assets/images/comment-author-02.jpg" alt="">
                          </div>
                          <div class="right-content">
                            <h4>Thirteen Man<span>May 22, 2020</span></h4>
                            <p>Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="sidebar-item submit-comment">
                    <div class="sidebar-heading">
                      <h2>Your comment</h2>
                    </div>
                    <div class="content">
                      <form id="comment" action="#" method="post">
                        <div class="row">
                          <div class="col-md-6 col-sm-12">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your name">
                            </fieldset>
                          </div>
                          <div class="col-md-6 col-sm-12">
                            <fieldset>
                              <input name="email" type="text" id="email" placeholder="Your email" >
                            </fieldset>
                          </div>
                          <div class="col-md-12 col-sm-12">
                            <fieldset>
                              <input name="subject" type="text" id="subject" placeholder="Subject">
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="message" placeholder="Type your comment" ></textarea>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" class="main-button">Submit</button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <sideBar/>
        </div>
      </div>
    </section>
</template>
<style scoped>
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

/* Sidebar */

.sidebar {
	margin-left: 30px;
}

.sidebar .sidebar-item {
	margin-top: 50px;
}

.sidebar .search {
	margin-top: 0px;
}

.sidebar .sidebar-heading h2 {
	font-size: 18px;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 0.5px;
	color: #20232e;
	border-bottom: 1px solid #eee;
	padding-bottom: 15px;
	margin-bottom: 25px;
}

.sidebar .search input {
	width: 100%;
	height: 50px;
	border: 1px solid #eee;
	font-size: 13px;
	text-transform: uppercase;
	font-weight: 500;
	color: #7a7a7a;
	outline: none;
	padding: 0px 15px;
}

.sidebar .search input::placeholder {
	color: #aaa;
}

.sidebar .recent-posts ul li {
	margin-bottom: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid #eee;
    list-style-type: none;
}
.sidebar .recent-posts ul li a{
    text-decoration: none;
}

.sidebar .recent-posts ul li:last-child {
	margin-bottom: 0px;
	padding-bottom: 0px;
	border-bottom: none;
}

.sidebar .recent-posts ul li h5 {
	font-size: 19px;
	font-weight: 900;
	color: #20232e;
	line-height: 30px;
	transition: all 0.3s;
}

.sidebar .recent-posts ul li h5:hover {
	color: #f48840;
}

.sidebar .recent-posts ul li span {
	display: block;
	font-size: 14px;
	color: #aaa;
	margin-top: 8px;
    
}

.sidebar .categories ul li {
	margin-bottom: 15px;
    list-style-type: none;
}

.sidebar .categories ul li:last-child {
	margin-bottom: 0px;
}

.sidebar .categories ul li a {
	font-size: 15px;
	font-weight: 700;
	color: #20232e;
	transition: all .3s;
    text-decoration: none;
}

.sidebar .categories ul li a:hover {
	color: #f48840;
}

.sidebar .tags ul li {
	margin-right: 6px;
	display: inline-block;
}

.sidebar .tags ul li {
	margin-bottom: 10px;
}

.sidebar .tags ul li a {
	font-size: 15px;
	font-weight: 500;
	color: #aaa;
	display: inline-block;
	border: 1px solid #eee;
	padding: 10px 18px;
	transition: all .3s;
    text-decoration: none;
}

.sidebar .tags ul li a:hover {
	background-color: #f48840;
	border-color: #f48840;
	color: #fff;
}
</style>