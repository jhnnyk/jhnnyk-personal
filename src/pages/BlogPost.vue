<template>
  <div class="blog-post">
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <div v-html="post.content"></div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'BlogPost',
  data() {
    return {
      post: null,
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const postsRef = db.collection('posts');
      const snapshot = await postsRef
        .where('slug', '==', this.$route.params.slug)
        .get();

      if (snapshot.empty) {
        // :TODO redirect to 404 page
        console.log('no matching docs');
      }

      snapshot.forEach((doc) => (this.post = doc.data()));
    },
  },
};
</script>
