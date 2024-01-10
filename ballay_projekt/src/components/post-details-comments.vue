<script>
import { defineComponent } from 'vue';
import { myStore } from '@/stores/store.js';

export default defineComponent({
  setup() {
    const store = myStore();

    return {
        commentItems : store.commentItems
    };
  }
});
</script>
<template>
    <div class="col-lg-12">
        <div class="sidebar-item comments">
            <div class="sidebar-heading">
                <h2>4 comments</h2>
            </div>
            <div class="content">
                <ul>
                    <li v-for="commentItems in commentItems" :key="commentItems.author">
                    <div class="author-thumb">
                        <img :src="commentItems.image" alt="">
                    </div>
                    <div class="right-content">
                        <h4>{{commentItems.author}}<span>{{commentItems.date}}</span></h4>
                        <p>{{ commentItems.content }}</p>
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
</template>