import React from 'react'
import styles from "./blog.module.css"
import Image from 'next/image'
import Link from 'next/link'


const getData = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store" });

  if(!res.ok){
    throw new Error("Failed to fetched data");
  }
   return res.json();
} 

const Blog = async() => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {
        data.map((item)=>(
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src=""
              alt=""
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
        )) }
    </div>  
  )
}

export default Blog