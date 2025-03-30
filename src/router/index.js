import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/order',
  },
  {
    path: '/v-list1',
    name: 'virtualList1',
    component: () => import('@/views/vlist1.vue'),
  },
  {
    path: '/v-list2',
    name: 'virtualList2',
    component: () => import('@/views/vlist2.vue'),
  },
  {
    path: '/order',
    name: 'orderPage',
    component: () => import('@/views/order/index.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
