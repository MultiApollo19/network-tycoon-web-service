import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { supabase } from '../suprabase/clientApp'
import Auth from '../components/suprabase/auth'
import Account from '../components/suprabase/account'

export default function Home() {

  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

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