import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '/home/anuj/Desktop/THIRAN/growSmart/growSmart-frontend/src/components/Register.vue'
import LandingView from '/src/components/Landing.vue'
import LoginView from '/src/components/Login.vue'
import PlantDashboard from '/src/components/PlantDashboard.vue'
import AddPlantView from '/src/components/AddPlant.vue'
import CommunityView from '../components/Community.vue';
import AddPostView from '../components/AddPost.vue';

const routes = [
    {
        path:'/',
        name:'home',
        component:LandingView
    },
    {
        path:'/register',
        name:'register',
        component:RegisterView
    },
    {
        path:'/login',
        name:'login',
        component:LoginView
    },
    {
        path:'/plant-dashboard',
        name:'PlantDashboard',
        component:PlantDashboard,
        props: route => ({ firstName: route.query.firstName }),
    },
    {
        path:'/add-plant',
        name:'AddPlant',
        component:AddPlantView
    },
    {
        path:'/community',
        name:'community',
        component:CommunityView
    },
    {
        path:'/add-post',
        name:'addpost',
        component:AddPostView

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router