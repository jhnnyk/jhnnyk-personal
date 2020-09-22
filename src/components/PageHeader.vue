<template>
  <header>
    <h1>jhnnyk.com</h1>
    <nav>
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
      <router-link :to="{ name: 'BlogPreview' }">Blog</router-link>
      <!-- <router-link :to="{name: 'Results'}">Results</router-link> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>
