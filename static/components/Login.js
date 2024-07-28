export default {
  template: `
  <div class="d-flex justify-content-center" style="margin-top : 25vh">
  <div class="mb-3 p-5 bg-light">
  <label for="user-email" class="form-label">Email address</label>    
        <div class='text-danger'>{{error}}</div>
        <input type="email" class="form-control" id="user-email" placeholder="name@example.com" v-model='cred.email'>
        <label for="user-password" class="form-label">Password</label>
        <input type="password" id="user-password" class="form-control" aria-describedby="passwordHelpBlock" v-model= "cred.password">
        <div id="passwordHelpBlock" class="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>
        <button class="btn btn-primary mt-2" @click='login'> Login </button>
    </div>
  </div>
`,
data(){
    return {
        cred:{
            email:null,
            password:null,
        },
        // userRole:null,
        error:null
    }
},
methods: {
    async login(){
        const res = await fetch('/user-login',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.cred)
        })
        const data = await res.json();
        if(res.ok){
            // console.log(data)
            // this.userRole = data.role
            localStorage.setItem('auth-token',data.token)
            localStorage.setItem('role',data.role)

            this.$router.push({path : '/'})
        }
        else{
            this.error = '*'+data.message 
        }
    }
},
};
