"use client"

import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div onClick={()=>signIn("google")}>Login</div>
  )
}

export default Login