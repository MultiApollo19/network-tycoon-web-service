import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import screen1 from "../public/Images/Screens/15072022.png"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tornado | Home</title>
        <meta name="description" content="Managment app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src={screen1} width={256} height={128} alt={"Screen"}/>
    </div>
  )
}