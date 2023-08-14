import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className={styles.main}>
            <Image
                src="/store.jpg"
                width={80}
                height={60}
                alt="Online Store picture"
                priority
            />
            &nbsp;
            <Link href={"/"} className={styles.heading}>
              <h2>Online Store <i>!</i></h2>
        </Link>
        </div>

    </>
  )
}

export default Navbar
