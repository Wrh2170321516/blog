import VueRouter from 'vue-router'
//引入组件
import Home from '../components/Home'
import introduction from '../components/nav/introduction'
import about from '../components/nav/about'
import ArticleInfo from "../components/ArticleInfo";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/introduction',
            component: introduction,
        },
        {
            path: '/about',
            component: about,
        },
        {
            path: '/article_info/hhh',
            component: ArticleInfo
        }

    ]
})