<script setup>
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
</script>
<template>
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
</template>