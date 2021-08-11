import Vue from 'vue'
import Router from 'vue-router'

// 연결할 컴포넌트 import
import HelloWorld from "@/components/HelloWorld.vue"
import Example from '@/components/Example'
// 필수
Vue.use(Router)

const routes = [
    {
        path: "/", // 경로
        name: "Hello", // 해당 경로의 이름
        component: HelloWorld // 이동할 컴포넌트
    },
    {
        path: "/foo",
        name: "Foo",
        component: HelloWorld
    },
    {
        path: "/example",
        name: "Example",
        component: Example
    },

]

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})
export default router