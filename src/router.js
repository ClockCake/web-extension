import Vue from "vue";
import Router from "vue-router";
import HomePage from "./pages/Home.vue";
import LevelaPage from "./pages/Level.vue";
import ScoreDetail from "./pages/ScoreDetail.vue";
import MemberShips from "./pages/MemberShips.vue";
import BudgetPage from "./pages/Budget.vue";
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
    },
    {
        path: "/budget",
        component:BudgetPage,
        name: "BudgetPage"
    }
]
const router = new Router({
    mode: "history",
    routes
});

export default router;