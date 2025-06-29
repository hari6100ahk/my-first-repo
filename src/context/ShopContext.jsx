import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "INR  ";
    const delivery_fee = 10; // Fixed typo: "deleviry_fee" -> "delivery_fee"
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size'); // Displays a toast notification for missing size
            return;
        }
        let cartData = structuredClone(cartItems); // Creates a deep copy of the cartItems state
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData); // Updates the cartItems state
        toast.success('Product added to cart!'); // Displays a success notification
    };

    useEffect(() => {
        console.log(cartItems); // Logs cartItems state whenever it changes
    }, [cartItems]);

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount +=cartItems[items][item];
                    }
                }catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId, size, quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemINfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try{

                    if(cartItems[items][item] > 0){
                        totalAmount += itemINfo.price * cartItems[items][item];

                    }

                }catch(error){
                        
                }

                
               
            }
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        showSearch,
        setSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount ,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
