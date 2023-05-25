import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function index() {
  return (
    <>
    <Head>
      <title>Service</title>
      <link rel="icon" href="/download.png" type="image/x-icon"/>
    </Head> 
    <div><center><Link href="./">index</Link> | <Link href="about">about</Link> </center></div>
    <h1><center>Service</center></h1>
    </>
  )
}




