import React from 'react'
import styles from "./category.module.css"
import Button from '@/app/components/button/button'
import Image from 'next/image'

const Category = ({params}) => {
  // console.log({params})
  // const ids= params;
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button title="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          src=""
          alt="category image"
          fill={true}
          />
        </div>

      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test2</h1>
          <p className={styles.desc}>Desc</p>
          <Button title="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          src=""
          alt="category image"
          fill={true}
          />
        </div>

      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test3</h1>
          <p className={styles.desc}>Desc</p>
          <Button title="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          src=""
          alt="category image"
          fill={true}
          />
        </div>

      </div>
    </div>
  )
}

export default Category