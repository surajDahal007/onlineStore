import React from 'react'
import Navbar from './Navbar'
import styles from "@/styles/ItemDetails.module.css"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { storeProduct } from './Item'

const ItemDetails = () => {

  const router =useRouter();

  const itemNo = router.query.ItemDetails;

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.product}>
          <h2>{storeProduct[itemNo-1].title}</h2>
          <br />

          <Image
            src={storeProduct[itemNo-1].image}
            height={250}
            width={200}
            alt={"product pic"}
            quality={100}
            priority
          />
          <br />
          <h3>Price: {storeProduct[itemNo-1].price}</h3>

          <h3>Category: {storeProduct[itemNo-1].category}</h3>

          <h3>Description:</h3>
          <p>{storeProduct[itemNo-1].description}</p>

          <h3>Rating: </h3>
          <p>
            Rating: &nbsp;  
            {storeProduct[itemNo-1].rating.rate} /5
            <br />
            Rated By: &nbsp;
            {storeProduct[itemNo-1].rating.count} people
          </p>
        </div>
      </div>
    </>
  )
}

export default ItemDetails
