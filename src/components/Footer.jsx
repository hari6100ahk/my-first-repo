import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt='' />
                <p className=''>
                At Forever, we believe fashion is for everyone, which is why we bring you stylish, comfortable, and affordable options. 
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>+91-8688120719</li>
                    <li>atmakuruhari6100@gmail.com</li>
                </ul>
            </div>
        </div>
       <div>
       <hr></hr>
       <p className='py-5 text-sm text-center'>Copyright 2025@ harimall.com - All Rights Reserved</p>
       </div>
    </div>
  )
}

export default Footer