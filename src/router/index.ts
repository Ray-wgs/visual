import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes = <RouteRecordRaw[]>[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('@/views/home.vue')
    },{
        path:'/three',
        component:()=>import('@/views/three/threeContainer.vue')
    },
    {
        path:'/container',
        component:()=>import('@/views/board/boardContainer.vue')
    },
    {
        path:'/chart',
        component:()=>import('@/views/chart/chartContainer.vue')
    },
    {
        path:'/view',
        component:()=>import('@/views/view.vue')
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

