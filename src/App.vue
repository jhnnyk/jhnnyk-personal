<template>
  <div id="app">
    <PageHeader />
    <router-view></router-view>
    test
  </div>
</template>

<script>
import PageHeader from './components/PageHeader';

export default {
  name: 'App',
  components: {
    PageHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: white;
  opacity: 0.5;
}

html {
  background: url('./assets/IMG_5865.jpg') no-repeat center center fixed;
  background-size: cover;
}
</style>
