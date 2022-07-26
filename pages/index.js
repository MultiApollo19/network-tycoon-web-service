import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const res = [64,128,256,512,1024]
  return (
    <div className={styles.container}>
      <Head>
        <title>Tornado | Home</title>
        <meta name="description" content="Managment app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {res.map((size) =>(
        
        <><p className='text-black text-xl'>{size}</p><Image key={size} src='/static/img/screens/15072022.png' width={size * 2} height={size} alt={"Screen"} /></>
    ))}
    </div>
  )
}