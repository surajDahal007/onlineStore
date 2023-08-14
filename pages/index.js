import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from './Components/Navbar'
import Item from './Components/Item'
// import List from './Components/List'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Online Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <br />
      <Item />
      <Footer />

    </>
  )
}
