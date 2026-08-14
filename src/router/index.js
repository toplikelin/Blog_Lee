import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import('../views/Career.vue'),
    meta: { title: '职业经历' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
    meta: { title: '博客文章' }
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: () => import('../views/BlogDetail.vue'),
    meta: { title: '文章详情' }
  },
  {
    path: '/categories/:category',
    name: 'Category',
    component: () => import('../views/Blog.vue'),
    meta: { title: '分类文章' }
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: () => import('../views/Blog.vue'),
    meta: { title: '标签文章' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { title: '联系方式' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | 李科林的个人博客`
  }
})

export default router
