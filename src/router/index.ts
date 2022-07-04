import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('@/views/home.vue')
    },
    {
        path:'/test',
        name:'test',
        component:()=>import('@/views/test.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;

