"use client";
// import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  console.log(session);
  // Fetching Data through SWR method recommended by NEXT.js
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  // console.log(data)
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async(e) => {
   e.preventDefault()
   const title = e.target[0].value;
   const des = e.target[1].value;
   const image = e.target[2].value;
   const content = e.target[3].value;

   try{
     await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
      title,
      des,
      image,
      content,
      username: session.data.user.name,
      }),
     });
     mutate();
     e.target.reset();
   }catch(err){
     console.log(error)
   }
  }
 
  const handleDelete = async(id) => {
    try {
      await axios.delete(`/api/posts/${id}`)
      mutate();
    } catch (err) {
      console.log(err)
    }
  }

  if (session.status === "authenticated") {

    return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {
           isLoading ? "Loading" : data?.map((post) => { 
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.image} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.delete} onClick={()=>handleDelete(post._id)}>X</span>
                </div>
              })}
        </div>
        <form className={styles.new} onsubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Post</button>
        </form>
    </div>
    );
  }
};

export default Dashboard;
