import Layout from "../components/layout";
import "../styles/globals.css"


import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="description" content="Managment app" />
      <link rel="icon" href="/favicon.ico" />
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

      <meta property='og:type' content='website' />
      <meta property='og:title' content='Tornado' />
      <meta property='og:description' content='Torando managment app' />
      <meta property='og:site_name' content='Tornado' />
      <meta property='og:url' content='https://tornadomanager.vercel.app' />
      <meta property='og:image' content='/logo.png' />
    </Head>
    <UserProvider supabaseClient={supabaseClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    </>
    
  );
}