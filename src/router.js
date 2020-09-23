import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import BlogPreview from './pages/BlogPreview';
import BlogPost from './pages/BlogPost';
import ResultsPage from './pages/ResultsPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/blog', name: 'BlogPreview', component: BlogPreview },
  { path: '/blog/:slug', name: 'BlogPost', component: BlogPost },
  { path: '/results', name: 'ResultsPage', component: ResultsPage },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
