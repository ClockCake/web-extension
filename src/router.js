import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/Home.vue";
import LevelaPage from "./components/Level.vue";
import ScoreDetail from "./components/ScoreDetail.vue";
import MemberShips from "./components/MemberShips.vue";
Vue.use(Router);
const routes = [
    {
        path: "/",
        component: HomePage,
        name: "HomePage"
    },
    {
        path : "/level",
        component: LevelaPage,
        name: "LevelaPage"
    },
    {
        path: "/memberships",
        component: MemberShips,
        name: "MemberShips"
    },
    {
        path: "/integral",
        component:ScoreDetail,
        name: "ScoreDetail"
    }
]
const router = new Router({
    mode: "history",
    routes
});

export default router;