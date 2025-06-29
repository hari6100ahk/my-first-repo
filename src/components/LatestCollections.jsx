import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollections = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    // whenever  this component gets loaded then the latest 10 products should be displayed or loaded into the website
    // here we are passing the [] as dependecy array so that the useEffect executes only once when the component is being called 

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
              This section contains the latest added products list
            </p>
        </div>

        {/* Redering Products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price = {item.price} />
                ))
            }
        </div>

    </div>
  )
}

export default LatestCollections;