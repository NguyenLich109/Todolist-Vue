import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './components/Home.vue'
import Todo from './components/Todo.vue'
import PageNotFound from './PageNotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todo',
        component: Todo
    },
    {
        path: '/:catchAll(.*)',
        component: PageNotFound
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router