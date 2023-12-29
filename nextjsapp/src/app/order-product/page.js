"use client"

import { useRouter } from "next/navigation";

export default function orderProduct(){
    const router = useRouter();
    const handleClick = () =>{
        console.log('Placing your order');
        // to push in the history 
        router.push("/")
        // incase you wish to replace the history 
        // router.replace("/")
        // or to navigate back to the previous page in history
        // router.back()
        // or to navigate forward
        // router.forward()
    }
    return (
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
        
        </>
    )
}