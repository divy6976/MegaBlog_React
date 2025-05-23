import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {login as authLogin} from '../appwrite/auth'       ; {/*ye authslice wla login hai */}
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {set, useForm} from 'react-hook-form'     
 {/*react hook from*/}

function Login() {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const {register,handleSubmit}=useForm()
    const[error,setError]=useState("")    
     {/*error ko set karne ke liye useState ka use kiya hai */ }

    {/* asynce isliye kyuki user se data loge doge  lafi kuch ho skta hai     */}
    const login=async(data)=>{
        setError("")
        try {
       const session=     await authService.login(data) 
           if(session)   {
            const userData=await authService.getCurrentUser()
            if(userData){
                dispatch(authLogin(userData))
            }
            navigate("/")
           }                                                               {/*agar session mila toh userlogin h aur nhi session mila toh nhi loggedin */ }
      } catch (error) {
            setError(error.message)
        }
    }

  return (
     <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                    </div>
<h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-500 mt-8 text-center'>{error}</p>}
                 
                 <form onSubmit={handleSubmit(login)} className='mt-8'>                          {/*jab bhi form  submithoga handlesubmit us krenge  handle submit ek method hai jaha aap apna method dete ho is trh form ko handle krunga*/}
                 <div className='space-y-5'>
                    <Input 
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    {...register("email",{
                        required:true,
                        validate:{
                              matchPattern:(value)=>   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid email address",
                        }
                    }) }                                                              {/* har input me register ka aisa syntax hai aur name unique dena fir denge hm options  */}
                    />
                    <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })}
                    />
                    <Button type="cusubmit" className="w-full">
                    Sign in</Button>


                 </div>
                 </form>
                    </div>
                    </div>  
  )
}

export default Login
