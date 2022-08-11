import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import supabase from '@/lib/supabase'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tornado | Home</title>
        <meta name="description" content="Managment app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}