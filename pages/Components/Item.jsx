import React, {useEffect, useState } from 'react'
import styles from '@/styles/Item.module.css'
import Image from 'next/image';
import Link from 'next/link';
export var storeProduct;

const Item = () => {

    const [searchValue, setSearchValue] = useState("");

    const [data, setData] = useState([]);

    const fetchInfo = async()=>{
        await fetch('https://fakestoreapi.com/products')
            .then(res=> res.json())
            .then((d)=> setData(d));
    }

    storeProduct=data;
    // console.log(data);

    useEffect(()=>{
        fetchInfo();
    },[])

    const filterProduct = data.filter((product)=>{
        if(searchValue.length>0){
            return product.category === searchValue;
        }
        else{
            return product;
        }
    })

return (
    <>
        <form>
            <input 
                type='text'
                placeholder=' Search By Category ... '
                className={styles.searchbar}
                onChange={(e)=>{
                    setSearchValue(e.target.value);
                }}
                />
        </form>

        <br />
        <br />
        <br />
        <div className={styles.items}>

         {filterProduct.map((item)=>{    
            return( 
            
                <div key={item.id} className={styles.card}>
                    <Link href={{
                        pathname:"/Components/[ItemDetails]",
                        query: {ItemDetails: `${item.id}`}
                    }}>

                    <Image
                        src={item.image}
                        width={250}
                        height={150}
                        alt={`${item.title}`}
                        quality={80}
                        priority
                        key={item.description}
                    />
                    
                    <br />
                    <b key={item.title}>{item.title}</b>
                    <br />
                    <b key={item.category}>Category:</b><i> {item.category} </i>
                    <br />
                    <b key={item.price}>Price:</b> <i>{item.price}</i>
                    </Link>
                </div>
            
            )
        })}        
    </div>  
    </>
  )
}

export default Item
