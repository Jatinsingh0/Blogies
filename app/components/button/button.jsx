import React from 'react'
import Link from 'next/link'
import styles from "./button.module.css"

const button = ({url,title}) => {
  return (
    <Link href={url}>
        <button className={styles.container} type='submit'>{title}</button>
    </Link>
  )
}

export default button