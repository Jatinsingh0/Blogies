"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./register.module.css"
import Link from "next/link";

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  
    try {
      const response = await fetch("/api/auth/register", {
         method: "POST",
         headers: {
          "content-type": "application/json",
         },
         body: JSON.stringify({
          name,
          email,
          password,
         }),
      });
  
      if (response.status === 201) {
        router.push("/dashboard/login?success=Account%20has%20been%20created");
      }
    } catch (err) {
      setError(true);
      console.error("Error occurred:", err);
    }
  };
  

  return (
<div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
      </form>

      {error && "Something went wrong!"}
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
