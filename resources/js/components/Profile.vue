
<template>
    <div class="container">
      <meta name="csrf-token" content="<?= csrf_token() ?>">
        <div class="row mt-12">
          <div class="col-md-12 mt-3">
              <div class="box card box-widget widget-user">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-black" style="background-image:url('./img/image.jpg')">
              <h3 class="widget-user-username">{{this.form.name}}</h3>
              <h5 class="widget-user-desc">{{this.form.bio}}</h5>
            </div>
            <div class="widget-user-image">
              <img class="img-circle" :src="getProfilePhoto()" alt="User Avatar">
            </div>
            <div class="box-footer">
              <div class="row">
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">3,200</h5>
                    <span class="description-text">SALES</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">13,000</h5>
                    <span class="description-text">FOLLOWERS</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-4">
                  <div class="description-block">
                    <h5 class="description-header">35</h5>
                    <span class="description-text">PRODUCTS</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
          </div>
          <!--end widget-->
   <div class="card">         
<div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class=""><a href="#activity" id="acsett" data-toggle="tab" aria-expanded="true">Activity</a></li>
             
              <li class=""><a href="#settings" id="acsett" data-toggle="tab">Settings</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="activity">
               
              </div>
             
              <div class="tab-pane" id="settings">
                <form>
                  <div class="form-group col-sm-10">
                    <label for="inputName" class="col-sm-2 control-label">Name</label>
                      <input type="text" v-model="form.name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" id="inputName" placeholder="Name">
                    </div>
                  
                  <div class="form-group col-sm-10">
                    <label for="inputEmail" class="col-sm-2 control-label">Email</label>
                      <input type="email"  v-model="form.email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="inputEmail" placeholder="Email">
                       <has-error :form="form" field="email"> </has-error>
                   
                  </div>
                  <div class="form-group col-sm-10">
                    <label for="inputPassword" class="col-sm-2 control-label">Password</label>
                      <input type="password" v-model="form.password" class="form-control" id="inputPassword" placeholder="Password">
                      <has-error :form="form" field="password"> </has-error>
                    </div>
                
                  <div class="form-group">
                    <label for="inputExperience" class="col-sm-2 control-label">Experience</label>

                    <div class="col-sm-10">
                      <textarea class="form-control" v-model="form.bio" :class="{ 'is-invalid': form.errors.has('bio') }" id="inputExperience" placeholder="Experience"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="myfile" class="col-sm-2 control-label">Choose File</label>

                    <div class="col-sm-6">
                      <input type="file" @change="updateProfile"  class="form-control" id="myfile" name="myfile" multiple >
                    </div>
                  </div>
                 
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" @click.prevent="updateInfo" class="btn btn-danger">Update</button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
   </div>

</div>
 </div>     
 </div>      
</template>

<script>

export default {
  data(){
  return{
  form: new Form({
   id:'',
   name: '',
   email: '',
   password: '',
   type: '',
   bio: '',
   photo: ''
       
})
    }
  },
  mounted(){
},
methods:{
  getProfilePhoto(){
    return "img/profile/"+this.form.photo;
  },
updateProfile(e){
 let image=e.target.files[0];
 console.log(image);

 if(image['size']<2111775){
 let reader = new FileReader();
 reader.onloadend=(image)=>{
   this.form.photo=reader.result;
 }
 
 reader.readAsDataURL(image);
 }
 else{
swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'The file must be less then 2MB!'
  
})
 }
},

updateInfo(){
  this.form.put('api/profile/')
  .then(()=>{
 swal.fire(
   'Updated!',
   'Information has been updated',
   'success'
 )
  })
  .catch(()=>{
 swal("Failed!","There was something wrong","warning");
  });
}
},

created()  {
axios.get("api/profile").then(({data})=>(this.form.fill(data)));

}
}



</script>



<style>
.widget-user .widget-user-header{
    height:300px;
    background-position: center;
    background-size: cover;
}
.nav-tabs-custom {
    margin-bottom: 20px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    border-radius: 3px;
}

.nav-tabs-custom>.nav-tabs {
    margin: 0;
    border-bottom-color: #f4f4f4;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
}
.nav-tabs {
    border-bottom: 1px solid #ddd;
    background-color:#e3342f;
}
.nav {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.nav-tabs-custom>.tab-content {
    background: #fff;
    padding: 20px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
.nav-tabs-custom>.nav-tabs>li {
   
    margin-bottom: 10px;
      margin-top: 10px;
      margin-left: 20px;
    
}
.nav-tabs-custom>.nav-tabs>li {
    border-top: 3px solid transparent;
   padding: 10px;
}
.nav-tabs-custom>.nav-tabs>li.active {
   border-top-color:grey;
}
.tab-content {
    display: block;
}
.nav-tabs>li  {
    float: left;
}
#acsett {
  text-decoration: none;
  font-size: 16px;
  color:white;

  }
.nav>li{
    position: relative;
    display: block;
   
}
.form-group {
    margin-bottom: 15px;
    padding-bottom: 15px;
    margin-right: -15px;
}
label {
    margin-bottom: 5px;
    font-weight: 700;
}
#myfile{
  
  padding-left: 0px;
  padding-top:3px ;
  padding-bottom:0px ;
}
</style>