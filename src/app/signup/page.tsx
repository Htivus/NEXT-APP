"use client";
import Link from 'next/link';
import { Router } from 'next/router';
import React, { useEffect } from 'react';
import { redirect, useRouter } from "next/navigation";
import  axios from "axios";
import toast from 'react-hot-toast';


export default function Loginpage() {

  const router=useRouter();

  const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:"",
  })

  const [buttonDisabled,setButtonDisabled] = React.useState(false);
  const [loading,setLoading]=React.useState(false);


  const onSignUp = async ()=>{
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup",user);
      console.log("Signup success ",response.data);
      console.log("hi")
      router.push('/login');
    } catch (error:any) {
      console.log("SignUp failed ",error);
      toast.error(error.message);
      
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(user.email.length>0 && user.password.length> 0 && user.username.length>0){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "processing...":"Signup"}</h1>
      <hr/>
      <label htmlFor='username'>username</label>
      <input 
      className='p-4  text-black  border-spacing-2 rounded-lg mb-4'
      id="username"
      type="text" 
      value={user.username}
      onChange={(e)=>setUser({...user,username:e.target.value})}
      placeholder='username'
       />
       <label htmlFor='email'>email</label>
      <input 
      className='p-4 border  text-black  focus:border-gray-600 focus:outline-none mb-4 rounded-lg'
      id="email"
      type="text" 
      value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}
      placeholder='email'
       />
       <label  htmlFor='password'>password</label>
      <input 
      className='p-4 text-black border focus:border-gray-600 focus:outline-none mb-4 rounded-lg'
      id="password"
      type="password" 
      value={user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      placeholder='password'
       />
     <button
     onClick={onSignUp}
      className='p-2 border border-gray-600 rounded-lg mb-4 '>{buttonDisabled?"Enter to signUp":"signUp"}</button>
      <Link href="/login">Login page</Link>
    </div>
    
  )
}
