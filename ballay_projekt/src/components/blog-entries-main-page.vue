<script>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import SideBar from './side-bar.vue';

export default {
    data() {
        return {
            blogs: [
                {
                    image: './images/blog-thumb-01.jpg',
                    category: 'Lifestyle',
                    title: 'Donec tincidunt leo',
                    author: 'Admin',
                    date: 'May 31, 2020',
                    comments: '12',
                    content: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
                    tag: 'Best Templates',
                    tag2: 'TemplateMo',
                },
                {
                    image: './images/blog-thumb-02.jpg',
                    category: 'Lifestyle',
                    title: 'Suspendisse et metus',
                    author: 'Admin',
                    date: 'May 22, 2020',
                    comments: '26',
                    content: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
                    tag: 'Best Templates',
                    tag2: 'TemplateMo',
                },
                {
                    image: './images/blog-thumb-03.jpg',
                    category: 'Lifestyle',
                    title: 'Donec tincidunt leo',
                    author: 'Admin',
                    date: 'May 18, 2020',
                    comments: '42',
                    content: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
                    tag: 'Best Templates',
                    tag2: 'TemplateMo',
                },
                {
                    image: './images/blog-thumb-04.jpg',
                    category: 'Lifestyle',
                    title: 'Mauris ac dolor ornare',
                    author: 'Admin',
                    date: 'May 16, 2020',
                    comments: '28',
                    content: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
                    tag: 'Best Templates',
                    tag2: 'TemplateMo',
                },
                {
                    image: './images/blog-thumb-05.jpg',
                    category: 'Lifestyle',
                    title: 'Donec tincidunt leo',
                    author: 'Admin',
                    date: 'May 12, 2020',
                    comments: '16',
                    content: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
                    tag: 'Best Templates',
                    tag2: 'TemplateMo',
                },
                {
                    image: './images/blog-thumb-06.jpg',
                    category: 'Lifestyle',
                    title: 'Mauris ac dolor ornare',
                    author: 'Admin',
                    date: 'May 10, 2020',
                    comments: '3',
                    content: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
                    tag: 'Best Templates',
                    tag2: 'TemplateMo',
                },
                {
                    image: './images/blog-thumb-05.jpg',
                    category: 'Lifestyle',
                    title: 'Donec tincidunt leo',
                    author: 'Admin',
                    date: 'May 12, 2020',
                    comments: '16',
                    content: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
                    tag: 'Best Templates',
                    tag2: 'TemplateMo',
                },
                {
                    image: './images/blog-thumb-06.jpg',
                    category: 'Lifestyle',
                    title: 'Mauris ac dolor ornare',
                    author: 'Admin',
                    date: 'May 10, 2020',
                    comments: '3',
                    content: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
                    tag: 'Best Templates',
                    tag2: 'TemplateMo',
                }
            ],
            currentPage: 1,
        };
    },
    computed: {
        currentPosts() {
            const startIndex = (this.currentPage - 1) * 6; // 6 je počet položek na stránku
            const endIndex = startIndex + 6; // 6 je počet položek na stránku
            return this.blogs.slice(startIndex, endIndex);
        },
    },
    methods: {
        // Metoda pro ruční aktualizaci aktuální stránky
        setCurrentPage(page) {
            this.currentPage = page;
        },
    },
    components: { SideBar }
};
</script>

<template>
    <section class="blog-posts grid-system">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="all-blog-posts">
              <div class="row">
                <div class="col-lg-6" v-for="(item, itemIndex) in currentPosts" :key="itemIndex">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img :src="item.image" alt="">
                    </div>
                    <div class="down-content">
                      <span>{{item.category}}</span>
                      <RouterLink to="/post-details"><h4>{{item.title}}</h4></RouterLink>
                      <ul class="post-info">
                        <li><a href="#">{{item.author}}</a></li>
                        <li><a href="#">{{ item.date }}</a></li>
                        <li><a href="#">{{item.comments}} Comments</a></li>
                      </ul>
                      <p>{{item.content}}</p>
                      <div class="post-options">
                        <div class="row">
                          <div class="col-lg-12">
                            <ul class="post-tags">
                              <li><i class="bi bi-tags"></i></li>
                              <li><a href="#">{{item.tag}}</a>,</li>
                              <li><a href="#">{{item.tag2}}</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-12">
                    <ul class="page-numbers">
                        <li v-for="page in [1, 2, 3, 4, 5]" :key="page" :class="{ active: currentPage === page }">
                            <!-- Ruční aktualizace aktuální stránky -->
                            <a @click="setCurrentPage(page)" class="page-link">{{ page }}</a>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <SideBar/>
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
    cursor: pointer;
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