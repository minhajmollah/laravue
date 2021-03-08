import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)
var routes=[
         {
    path:'/',
    name:'home',
    component:()=>import('../components/master.vue'),
    redirect:{path:'/login'},
    children:[
                {
    path:'/home',
    name:'mainhome',
    component:()=>import('../components/mainhome.vue'),

},
         {
    path:'register',
    name:'login',
    component:()=>import('../components/login.vue')
},
          {
    path:'login',
    name:'register',
    component:()=>import('../components/register.vue')
},
  
      {
    path:'/css',
    name:'css',
    component:()=>import('../components/sss.vue')
},


    ]
},
    {
    path:'/dashboard',
    name:'dashboard',
    component:()=>import('../components/admin/Appp.vue')
},
        {
    path:'/logout',
    name:'logout',
    component:()=>import('../components/logout.vue')
},


];
const router= new Router({
    routes:routes,
   
});
export default router;