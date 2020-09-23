<template>
  <div id="app">
    <PageHeader />
    <main>
      <router-view></router-view>
    </main>
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
  color: #2c3e50;
}

html {
  background: url('./assets/IMG_5865.jpg') no-repeat center center fixed;
  background-size: cover;
}

body {
  margin: 0;
}

main {
  margin: 20px 15%;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
}

h1 {
  text-align: center;
  margin: 0;
}
</style>
