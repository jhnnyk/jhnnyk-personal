<template>
  <div class="blogpreview">
    <h2>Blog</h2>
    <section v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <p>{{ post.publishDate.toDate().toDateString() }}</p>
      <div class="content" v-html="post.content"></div>
    </section>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'BlogPreview',
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const postsRef = db.collection('posts');
      const snapshot = await postsRef.get();
      snapshot.forEach((doc) => this.posts.push(doc.data()));
    },
  },
};
</script>

<style>
.content img {
  width: 100%;
}
</style>
