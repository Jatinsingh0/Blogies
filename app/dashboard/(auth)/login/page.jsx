"use client"

import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import styles from "./login.module.css"

const Login = () => {
  const session = useSession();

  if(session.status){
  return <p>Loading..</p>
  }
  if(session.status === "authenticated"){
   router?.push("/dashboard")
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password});
  };

  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={()=>signIn("google")}>Login with Google</button>

    </div>
  )
}

export default Login;