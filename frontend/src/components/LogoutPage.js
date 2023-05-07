import { useEffect } from "react"
import authStore from "../stores/authStore"


export const LogoutPage = () => {
    const store = authStore()
    useEffect(()=>{
        store.logout()
        // eslint-disable-next-line
    },[])
  return (

      <div className="alert alert-warning" role="alert">
        You're now Logged out!
      </div>

  )
}
