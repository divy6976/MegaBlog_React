import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

                                        // ye ek mechanism hai jisse pages aur routes ko protect kiya ja sakta hai


export default function Protected({children,authentication =true}) {
  const navigate=useNavigate();
  const [loader,setLoader]=useState(true);
  const authStatus=useSelector((state)=>state.auth.status);

  useEffect(()=>{
    //Todo:make it more easy to understand
   
    /*

if(authStatus===true){
navigate("/");
}else if(authStatus===false){
navigate("/login");
  }


    */



 


    if(authentication && authStatus!==authentication){
        navigate("/login");
    }else if(!authentication && authStatus!==authentication){
        navigate("/");

    }

setLoader(false);           //loader ke basis pr show krnege user ko
  },[authStatus,navigate,authentication])
  
    return  loader ? <h1>Loading...</h1> :<>{children}</>
    
  
}



