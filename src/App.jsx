
import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {login,logout} from './store/authSlice'
import authService from './appwrite/auth'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


function App() {
const [loading, setLoading] = useState(true)

const dispatch = useDispatch() //State change krunga toh dispatch function use krunga
useEffect(()=>{                  //jaise hi page load hoga useEffect chalega aur authService se user ki details lenge pucho 
// ga ki kya user login hai ya nahi
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}));
    }else{
      dispatch(logout());
    }
  })
  .finally(()=>setLoading(false))  //ye run hota hai hai
},[])
 
return  !loading ? (
  <div className="min-h-scrren flex flex-wrap ">
    
    <div className='w-full block'>
<Header/>
<main>
 Todo: : <Outlet/>                                        
</main>
<Footer/>

    </div>

  </div>
) : null
  


}

export default App


//env variables hmesa project root me rhne chaiye jaise readme.md


//max case me agar env vile me kch vary kra toh fr project run krna pdta ahi