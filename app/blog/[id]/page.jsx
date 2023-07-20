import React from 'react'
import Image from 'next/image';
import styles from "./blogPost.module.css"

const getData = async (id) =>{
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: "no-store" });
  return res.json();
}
const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>
          {data.content}
        </p>
        <div className={styles.author}>
          <Image
            src={data.image}
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>{data.username}</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={data.image}
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
       {data.content}
      </p>
    </div>
  </div>
  )
}

export default BlogPost