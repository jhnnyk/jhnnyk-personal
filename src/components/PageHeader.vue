<template>
  <header>
    <h1 class="title">jhnnyk.com</h1>
    <nav>
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
      <router-link :to="{ name: 'BlogPreview' }">Blog</router-link>
      <router-link :to="{ name: 'ResultsPage' }">Results</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
}

h1.title {
  color: white;
  margin: 0;
  padding: 0;
}

nav a {
  display: inline-block;
  padding: 10px;
  color: white;
  text-decoration: none;
}

nav a:hover,
nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
