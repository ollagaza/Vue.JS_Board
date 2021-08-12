import Vue from 'vue'
import Router from 'vue-router'

// 연결할 컴포넌트 import
import HelloWorld from "@/components/HelloWorld.vue"
import Example from '@/components/Example'
import List from '@/components/List'
import List2 from '@/components/List2'
import Write from '@/components/Write'
import View from '@/components/View'

// 필수
Vue.use(Router)

export default new Router({
    mode: 'history', // history 모드는 자연스러운 url 가능, 지정하지 않으면 해시(#)기호로 url 사용
    routes: [
        {
            path: "/", // 경로
            name: "Hello", // 해당 경로의 이름
            component: HelloWorld // 이동할 컴포넌트
        },
        {
            path: "/example",
            name: "Example",
            component: Example
        },
        {
            path: "/list",
            name: "List",
            component: List
        },
        {
            path: "/list2",
            name: "List2",
            component: List2
        },
        {
            path: "/write",
            name: "Write",
            component: Write
        },
        {
            path: "/view",
            name: "View",
            component: View
        },
    ]
})