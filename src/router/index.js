import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'Home', component: Home},

    // Catch-all route (must be last)
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound},
]

const router = createRouter({
    history: createWebHistory('/toanchetpay/'), routes
});

//Route Guard to prevent direct access without login
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.meta.requiresAuth && !token) {
        next('/')
    } else {
        next()
    }
});

export default router