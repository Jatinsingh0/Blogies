"use client";
// import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export const metadata = {
  title: 'Dashboard ',
  description: 'This is a Dashboard page',
}

const Dashboard = () => {
  //  FETCH DATA USING useEffect Method
  // const[data, setData] = useState([]);
  // const[isLoading, setIsLoading] = useState(false)

  // useEffect(()=>{
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  //     const data = await res.json()
  //     setData(data);
  //     setIsLoading(false)
  //   };
  //   getData();
  // }, [])

  // console.log(data)


  const session = useSession();
  // Fetching Data through SWR method recommended by NEXT.js 
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // console.log(data)
  return <div>
    Dashboard
  </div>;
};

export default Dashboard;
