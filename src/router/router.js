import Vue from 'vue'
import Router from 'vue-router'

// 연결할 컴포넌트 import
import HelloWorld from "@/components/HelloWorld.vue"
import Example from '@/components/Example'
import BoardList from '@/components/BoardList'
import BoardList2 from '@/components/BoardList2'

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
            name: "BoardList",
            component: BoardList
        },
        {
            path: "/list2",
            name: "BoardList2",
            component: BoardList2
        },
    ]
})