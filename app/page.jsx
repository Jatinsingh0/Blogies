import Image from 'next/image'
import styles from './page.module.css'
import Hero from "../public/Hero1.png"
import Button from './components/button/button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>
        <Button title="See Our Works" url="/portfolio"/>
      </div>
      <div className={styles.item}>
      <Image src="" alt='Hero Image' width={500} height={500}/>
      </div>
    </div>
  )
}
