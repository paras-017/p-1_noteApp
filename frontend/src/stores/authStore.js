import { create } from 'zustand'
import axios from "axios";

const authStore = create((set,get) => ({
       alert:false,
      loggedIn:null,
      loginForm:{
        email:"",
        password:""
      },
      signupForm:{
        email:"",
        password:""
      },


      updateLoginForm:(e)=>{
         const {name, value} = e.target
         set((state)=>{
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]:value,
            }
          }
         })
      },
      updateSignupForm:(e)=>{
         const {name, value} = e.target
         set((state)=>{
            return {
               signupForm: {
                    ...state.signupForm,
                    [name]:value,
            }
          }
         })
      },
      login:async(e)=>{
         const {loginForm} = authStore.getState()
          await axios.post('http://localhost:3000/login/',loginForm )
         set({alert:true,loggedIn:true,loginForm:{email:"",password:""}})
         
      },
      checkAuth:async(e)=>{
      try {
         await axios.get("http://localhost:3000/check-auth/")
         set({loggedIn:true})
      } catch (error) {
         set({loggedIn:false})
      }
      },
      
      signup:async()=>{
         const {signupForm} = authStore.getState()
        await axios.post('http://localhost:3000/signup',signupForm )
         set({
            signupForm:{
               email:"",
               password:""
             }
         })
      },
      logout:async()=>{
        await axios.get('http://localhost:3000/logout')
        set({loggedIn:false})
      }
}))
export default authStore