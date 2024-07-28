export default {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Live Session</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse text-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
            <router-link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item" v-if="!is_login">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="role == 'admin'">
            <router-link class="nav-link" to="/users">Users</router-link>
          </li>
          <li class="nav-item" v-if="role == 'stud'">
            <router-link class="nav-link" to="/create-resource">Create Resource</router-link>
          </li>
          <li class="nav-item text-end" v-if="is_login" style="float : right">
            <button class="nav-link text-end" @click='logout'>Logout</button>
          </li>
    </ul>
  </div>
</nav>
  `,
  data(){
    return {
      role:localStorage.getItem('role'),
      is_login : localStorage.getItem('auth-token'),
    }
  },
  
  methods:{
    logout(){
      localStorage.removeItem('role');
      localStorage.removeItem('auth-token');
      this.$router.push({path : '/login'});
    }
  }
}
