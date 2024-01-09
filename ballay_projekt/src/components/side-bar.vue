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
                    <div class="content">
                      <ul>
                        <li><RouterLink to="/blog-entries">- Nature Lifestyle</RouterLink></li>
                        <li><RouterLink to="/blog-entries">- Awesome Layouts</RouterLink></li>
                        <li><RouterLink to="/blog-entries">- Creative Ideas</RouterLink></li>
                        <li><RouterLink to="/blog-entries">- Responsive Templates</RouterLink></li>
                        <li><RouterLink to="/blog-entries">- HTML5 / CSS3 Templates</RouterLink></li>
                        <li><RouterLink to="/blog-entries">- Creative &amp; Unique</RouterLink></li>
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
                        <li><RouterLink to="/blog-entries">Lifestyle</RouterLink></li>
                        <li><RouterLink to="/blog-entries">Creative</RouterLink></li>
                        <li><RouterLink to="/blog-entries">HTML5</RouterLink></li>
                        <li><RouterLink to="/blog-entries">Inspiration</RouterLink></li>
                        <li><RouterLink to="/blog-entries">Motivation</RouterLink></li>
                        <li><RouterLink to="/blog-entries">PSD</RouterLink></li>
                        <li><RouterLink to="/blog-entries">Responsive</RouterLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>