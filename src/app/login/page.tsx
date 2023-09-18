"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/navigation";
import { axios } from "axios";


export default function Loginpage() {
  const [user,setUser]=React.useState({
    email:"",
    password:"",
  })

  const onLogin = async ()=>{
    
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className='text-bold'>Login</h1>
      <hr/>
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
     onClick={onLogin}
      className='p-2 border border-gray-600 rounded-lg mb-4 '>Login</button>
      <Link href={'/signup'}> SignUp here</Link>
    </div>
  )
}
