import {
   useEffect,
   useState
} from "react"
import {
   useDispatch
} from "react-redux"
import {
   userLogin
} from "../features/auth/authSlice"


const useAuthCheck = () => {
   const dispatch = useDispatch()
   const [authChecked, setAuthChecked] = useState(true)

   useEffect(() => {
      let localAuth = localStorage.getItem('auth')
      if (localAuth) {
         let auth = JSON.parse(localAuth)
         if (auth?.accessToken && auth?.user)
            dispatch(userLogin({
               accessToken:auth.accessToken,
               user: auth.user
          }))
      }
      setAuthChecked(true)
   }, [dispatch])


   return authChecked
}

export default useAuthCheck