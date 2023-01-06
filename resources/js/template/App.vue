
<template>
  <v-app id="inspire">
      <div>
         <v-navigation-drawer
         v-model="drawer"
         app
         >
            <v-list
               v-if="(loginStatus == '')"
               dense>
               <v-subheader>LIST ITEMS:</v-subheader>
               <!-- //**************************// -->
               <!-- //for HOME page to be viewed// -->
               <!-- //**************************// -->
                  <v-list-item
                     v-for="(item, i) in mainItems"
                     :to="item.path"
                     :key="i"
                  >
                     <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                        <v-list-item-title v-text="item.text"/>
                     </v-list-item-content>
                  </v-list-item>
            </v-list>

            <v-list
               v-else-if="loginStatus == 'Admin'"
               dense>
               <v-subheader>LIST ITEMS:</v-subheader>
               <!-- //***************************// -->
               <!-- //for ADMIN page to be viewed// -->
               <!-- //***************************// -->
                  <v-list-item
                     v-for="(item, i) in adminItems"
                     :to="item.path"
                     :key="i"
                  >
                     <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                        <v-list-item-title v-text="item.text"/>
                     </v-list-item-content>
                  </v-list-item>
            </v-list>

            <v-list
               v-else-if="loginStatus == 'Accounting'"
               dense>
               <v-subheader>LIST ITEMS:</v-subheader>
               <!-- //***************************// -->
               <!-- //for ADMIN page to be viewed// -->
               <!-- //***************************// -->
                  <v-list-item
                     v-for="(item, i) in cashierItems"
                     :to="item.path"
                     :key="i"
                  >
                     <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                        <v-list-item-title v-text="item.text"/>
                     </v-list-item-content>
                  </v-list-item>
            </v-list>
         
         </v-navigation-drawer>

         <v-app-bar
         dense
         class="appStyle"
         app>
            <v-app-bar-nav-icon @click="(drawer = !drawer)" dark/>
            <v-toolbar-title
               v-if=" loginStatus == '' "
               class="appTitle"
               >School System Trial
            </v-toolbar-title>
            <v-toolbar-title 
               v-else-if="loginStatus == 'Admin' " 
               class="appTitle"
               >Admin System
            </v-toolbar-title>
            <v-toolbar-title 
               v-else-if=" loginStatus == 'Accounting' " 
               class="appTitle"
               >Accounting System
            </v-toolbar-title>
            <v-spacer/>
            <v-btn
               @click="(LoginDialog = true)"
               v-if="(loginStatus == '')"
               color="primary"
            ><b>Login</b>
            </v-btn>
            <v-btn
               @click="logoutBtn()"
               color="error"
               v-else
            ><b>Logout</b>
            </v-btn>
         </v-app-bar>

         <!-- ++ LOGIN DIALOG ++ -->
         <v-dialog
            v-model="LoginDialog"
            width="30%"
            persistent>
            <v-card>
               <v-card-title>
               <b >Systems Login</b>
               <v-spacer/>
               </v-card-title>
               <v-card-text>
                  <v-col>
                     <v-text-field
                        hint="Administration, Accouting, etc."
                        v-model="systemName"
                        label="System"
                        maxlength="25"
                        outlined
                        dense
                     />
                  </v-col>
                  <v-col>
                     <v-text-field
                        :append-icon="value ? 'mdi-eye-off' : 'mdi-eye' "
                        hint="CAUTION!!! Autorzed personnel only"
                        @click:append="() => (value = !value)"
                        :type="value ? 'password' : 'text'"
                        v-model="systemPasscode"
                        label="Passcode"
                        maxlength="25"
                        outlined
                        dense
                     />
                  </v-col>
                  <v-row>
                     <v-col cols="8">
                        <v-btn
                           @click="loginBtn()"
                           color="primary"
                           block
                        >enter
                        </v-btn>
                     </v-col>
                     <v-col cols="3">
                        <v-btn
                           @click="LoginDialog = false"
                           color="white"
                           block
                        >cancel
                        </v-btn>
                     </v-col>
                  </v-row>
               </v-card-text>
            </v-card>
         </v-dialog>

         <v-main class="ma-2">
            <router-view/>
         </v-main>
      </div>
  </v-app>
</template>

<script>
   import Swal from 'sweetalert2'
   export default {
      data: () => ({ 
         LoginDialog: false,
         drawer: false,
         loginStatus: "",
         systemName:'',
         systemPasscode:'',
         value: String,
         mainItems:[
            {text:'Home', icon:'mdi-home', path:'/home'},
            {text:'Room Checker', icon:'mdi-book-variant', path:'/room_checker'},
            {text:'Abouts', icon:'mdi-information', path:'/about'},
         ],
         adminItems:[
            {text:'Admin', icon:'mdi-home', path:'/admin'},
            {text:'Students Data', icon:'mdi-information', path:'/students_data'},
         ],
         cashierItems:[
            {text:'Computations', icon:'mdi-home', path:'/computations'},
            {text:'Students Balance', icon:'mdi-information', path:'/students_balance'},
         ],
      }),
      methods:{
         loginBtn(){    
            if(this.systemName == '' && this.systemPasscode ==''){
               Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Incert System Name!',
                  showConfirmButton: false,
                  timer: 1500
               })
            }else if(this.systemName == 'Admin' && this.systemPasscode == 'administration'){
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Successfully logged in!',
                  showConfirmButton: false,
                  timer: 1500
               })
               this.loginStatus = this.systemName
               this.LoginDialog = false
               this.drawer = false
               this.systemName = ''
               this.systemPasscode = ''
               this.$router.push('/')
            }else if(this.systemName == 'Accounting' && this.systemPasscode == 'Accounting'){
               this.loginStatus = this.systemName
               this.LoginDialog = false
               this.drawer = false
               this.systemName = ''
               this.systemPasscode = ''
               this.$router.push('/')
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Successfully logged in!',
                  showConfirmButton: false,
                  timer: 1500
               })
            }else{
               Swal.fire({
                  position: 'center',
                  icon: 'warning',
                  title: 'Something is incorrect!',
                  showConfirmButton: false,
                  timer: 1500
               })
            }
            
         },

         logoutBtn(){
            this.loginStatus = ''
            this.$router.push('/home')
         },
      }
   }
</script>
<style>
   .appStyle{
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
   }
   .appTitle{
      color: white;
   }
</style>