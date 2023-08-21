import React from 'react'
import styles from "./category.module.css"
import Button from '@/app/components/button/button'
import Image from 'next/image'
import { items } from './data'


const getData = (cat) => {
  const data = items[cat]
  return data || []; // Return an empty array if data is undefined or false
};

const Category = ({params}) => {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>    
        {data.map((items)=>(
      <div className={styles.item} key={items.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{items.title}</h1>
          <p className={styles.desc}>{items.desc}</p>
          <Button title="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          src={items.image}
          alt="category image"
          fill={true}
          />
        </div>
        
      </div>
        ))
    }
    </div>
  )
}

export default Category;