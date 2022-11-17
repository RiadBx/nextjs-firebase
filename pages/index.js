import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import {useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function index() {
    // const auth = getAuth();
    // const [user,loading] = useAuthState(auth)
    let router = useRouter()

    useEffect(() => {
        let token = sessionStorage.getItem('Token')
        if (token) {
          console.log(sessionStorage)
        } 
        if (!token) {
          router.push('/register')
        }
      }, [])
    
    //   if(loading){
    //     return <div>loading..</div>
    //    }



    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {/* {sessionStorage.getItem('Token') ? `${session.user.name}, ` : ''}Welcome to{' '} */}
                    <a>Next.js!</a>
                </h1>
                
                <p className={styles.description}>
                  
                   Index page is working !
                </p>
                <Link className={styles.googleAlt} href="/home">

                    for More details
                </Link>

                {/* <h1>{user ? `${user.displayName}, ` : ''}Welcome to{' '}Home page</h1> */}

                <div className={styles.grid}>
                   
                   
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

