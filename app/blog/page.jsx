import React from 'react'
import styles from "./blog.module.css"
import Image from 'next/image'
import Link from "next/link"

export const metadata = {
  title: 'Blogs',
  description: 'This is a Blog page',
}

const getData = async() =>{
  console.log("fetching")
  const res = await fetch("http://localhost:3000/api/posts", {cache: "no-store" });
  

  if(!res.ok){
    // throw new Error("Failed to fetched data");
  }
   return res.json();
} 


const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {
        data.map((item)=>(
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt=""
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
        )) }
    </div>  
  )
}

export default Blog