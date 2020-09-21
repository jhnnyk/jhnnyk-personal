import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import BlogPreview from './pages/BlogPreview';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/blog', name: 'BlogPreview', component: BlogPreview },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
