import AdminHome from "./AdminHome.js"
import InstructorHome from "./InstructorHome.js"
import StudentHome from "./StudentHome.js"
import StudyResource from "./StudyResource.js"

export default {
    
template:`<div>
<StudentHome v-if="userRole=='stud'"/>
<InstructorHome v-if="userRole=='inst'"/>
<AdminHome v-if="userRole=='admin'"/>
<StudyResource v-for="(resource,index) in resources" :key='index' :resource="resource"/>
</div>`,

data(){
    return {
        userRole : localStorage.getItem('role'),
        authToken : localStorage.getItem('auth-token'),
        resources : [],
    }
},
components:{
    StudentHome,
    InstructorHome,
    AdminHome,
    StudyResource
},
async mounted(){
    console.log(this.userRole,this.authToken)
    const res = await fetch('/api/study_material',{
        headers:{
            "Authentication-Token":this.authToken,
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json()
    console.log(data)
    if (res.ok){
        this.resources = data
    }
    else{
        alert(data.message)
    }
}
}
