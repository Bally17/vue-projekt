<script setup>
import { RouterLink } from 'vue-router'
const contentSidebar = [
  {
    content: 'Vestibulum id turpis porttitor sapien facilisis scelerisque',
    date: 'May 31, 2020',
  },
  {
    content: 'Suspendisse et metus nec libero ultrices varius eget in risus',
    date: 'May 28, 2020',
  },
  {
    content: 'Swag hella echo park leggings, shaman cornhole ethical coloring',
    date: 'May 14, 2020',
  },
];
const contentSidebarCategories = [
  {
    content: 'Nature Lifestyle',
  },
  {
    content: 'Awesome Layouts',
  },
  {
    content: 'Creative Idea',
  },
  {
    content: 'Responsive Templates',
  },
  {
    content: 'HTML5 / CSS3 Templates',
  },
  {
    content: 'Creative & Unique',
  },
];
const contentSidebarTags = [
  {
    content: 'Lifestyle',
  },
  {
    content: 'Creative',
  },
  {
    content: 'HTML5',
  },
  {
    content: 'Inspiration',
  },
  {
    content: 'Motivation',
  },
  {
    content: 'PSD',
  },
  {
    content: 'Responsive',
  },
];
</script>
<template>
    <div class="col-lg-4">
            <div class="sidebar">
              <div class="row">
                <div class="col-lg-12">
                  <div class="sidebar-item search">
                    <form id="search_form" name="gs" method="GET" action="#">
                      <input type="text" name="q" class="searchText" placeholder="type to search..." autocomplete="on">
                    </form>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="sidebar-item recent-posts">
                    <div class="sidebar-heading">
                      <h2>Recent Posts</h2>
                    </div>
                    <div class="content" v-for="(con, conIndex) in contentSidebar" :key="conIndex">
                      <ul>
                        <li><RouterLink to="/post-details">
                          <h5>{{con.content}}</h5>
                          <span>{{con.date}}</span>
                        </RouterLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="sidebar-item categories">
                    <div class="sidebar-heading">
                      <h2>Categories</h2>
                    </div>
                    <div class="content" >
                      <ul v-for="(cat, catIndex) in contentSidebarCategories" :key="catIndex">
                        <li><RouterLink to="/blog-entries">- {{cat.content}}</RouterLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="sidebar-item tags">
                    <div class="sidebar-heading">
                      <h2>Tag Clouds</h2>
                    </div>
                    <div class="content">
                      <ul>
                        <li v-for="(tag, tagIndex) in contentSidebarTags" :key="tagIndex">
                            <RouterLink to="/blog-entries">{{tag.content}}</RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<style scoped>
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