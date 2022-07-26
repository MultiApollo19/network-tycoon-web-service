import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tornado - Network Tycoon managment panel</title>
        <meta name="description" content="Managment app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
    </div>
  )
}

export const config={
  runtime: 'experimental-edge'
};
