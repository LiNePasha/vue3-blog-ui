import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/views/HomePage.vue';
import PostDetailsPage from '@/views/PostDetailsPage.vue';

const routes = [
  { path: '/', name: "home", component: HomePage },
  { path: '/post/:id', name: "post", component: PostDetailsPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})