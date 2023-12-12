import { createRouter, createWebHistory } from 'vue-router';
  
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     name: 'helloworld',
        //     component: () => import('@/components/HelloWorld.vue'),
        // },
        //URL de la page
        {
            path: '/',
            name: 'homepage',
            component: () => import('@/views/HomePage.vue'),
        },
    ]
});



export default router;
