<template>
  <div class="blogpreview">
    <h1>Blog</h1>
    <section v-for="(post, index) in posts" :key="index">
      <div class="post-preview-header">
        <h3>
          {{ post.title }}
        </h3>
        <span class="date">
          {{
            post.publishDate.toDate().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </span>
      </div>

      <p>{{ post.teaser }} ...read more</p>
      <!-- <div class="content" v-html="post.content"></div> -->
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
      const snapshot = await postsRef.orderBy('publishDate', 'desc').get();
      snapshot.forEach((doc) => this.posts.push(doc.data()));
    },
  },
};
</script>

<style>
section {
  margin-top: 40px;
}

.post-preview-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px dashed gray;
  padding-top: 10px;
}

.date {
  font-weight: normal;
  font-size: 0.65em;
}
</style>
