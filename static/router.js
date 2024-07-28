import Home from "./components/Home.js"
import Login from "./components/Login.js"
import Users from "./components/Users.js"
import StudyResourceForm from "./components/StudyResourceForm.js"

const routes = [
    {path:'/', component: Home, name:'Home'},
    {path:'/login', component: Login, name:'Login'},
    {path :'/users', component: Users, name:'Users'},
    {path :'/create-resource', component: StudyResourceForm, name:'StudyResourceForm'},
]

export default new VueRouter({
    routes, 
})