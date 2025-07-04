import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false); // Initialize with boolean `false`
  const {setShowSearch,showSearch, getCartCount} = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'> <img src={assets.logo} className="w-36" alt="" /> </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 hidden">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch((prev) => !prev)}src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
         <Link to='/login'> <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="" /> </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
           {getCartCount()} 
          </p>
        </Link>

        {/* Toggle menu for small screens */}
        <img
          onClick={() => setVisible(!visible)} // Toggle the visible state
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? 'w-full h-full' : 'w-0 h-0'
        }`}
      >
        <div onClick={()=>setVisible(false)} className='flex flex-col cursor-pointer text-gray-600'>
            <div className='flex items-center gap-4 p-3'>
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=''/>   
                <p>Back</p>
            </div>
            <NavLink className='py-2 pl-6 border' to='/'>HOME </NavLink>
            <NavLink className='py-2 pl-6 border' to='/collection'>COLLECTION </NavLink>
            <NavLink className='py-2 pl-6 border' to='/about'>ABOUT </NavLink>
            <NavLink className='py-2 pl-6 border' to='/contact'>CONTACT </NavLink>
           

        </div>

        
       
      </div>
    </div>
  );
};

export default Navbar;
