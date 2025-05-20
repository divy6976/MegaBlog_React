import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import {Link} from 'react-router-dom'   //redirection ke liye kuch links bhi lgenge
import { useSelector } from 'react-redux' // isse store me jake dekh paounga user logged in hai ya nhi

import { useNavigate } from 'react-router-dom'

function Header() {
  //sbse phle state me se niklana pdega authenticated h ya nhi
  const  authStatus=useSelector((state)=> state.auth.status)
  const navigate=useNavigate() //is function se redirect kar sakte h
  
                         //is trh ki navigtion bar jab bnti hai tb array bnakr uspr loop kia jata hai
 const navItems = [
    {
      name: 'Home',
      slug: "/",     //slug means url kaha jaa rha hai
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",                 //jin pe status true hoga unka display krnege
      active: !authStatus,              //user agar login hai toh login aur isgnup btn dikhana hi kyu hi
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  
  
  return (
   <header className='py-3 shadow bg-gray-500'>
    <Container>
      <nav className='flex'>
        
          <div className='mr-4'>
<Link to='/'>
<Logo width='70px'/>

</Link>
          </div>       //bahar hai unordered list jisme krayenge loop 

          <ul className='flex ml-auto  '>
            {navItems.map((item)=>                                       //{} ke anadr isliye likha kyuki ye jsc me likha gya hai   jsx me javascript run krega
       item.active ? (
        <li key={item.name}>
<button>{item.name}</button>                                    //isme navigtion wala kaam   
        </li>                                                               //jo html elemnt repeat ho rh h usme key lgani hai jaise isme li
       ):null                                                          //agar item active hai toh kuch aur nhi h toh null display
             )}
          </ul>
        
      </nav>
    </Container>
   </header>
  )
}

export default Header



//logout dikhana hai ya nhi dikhana  conditional render pr dikhayenge
//check krnenge user login hai ya nhi