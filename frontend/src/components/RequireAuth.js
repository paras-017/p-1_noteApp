import { useEffect } from "react"
import {Navigate} from 'react-router-dom'
import authStore from "../stores/authStore"

export default function RequireAuth(props){
    const store = authStore()

     useEffect(()=>{
      if(store.loggedIn === null){
        store.checkAuth()
      }
       // eslint-disable-next-line
     },[])

     if(store.loggedIn === null){
      return <div>loading</div>
     }

    if(store.loggedIn===false) {
        return <Navigate to="/login"/>
    }
  return     <div>{props.children}</div>
}
