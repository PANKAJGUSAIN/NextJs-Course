"use client"

import { useRouter } from "next/navigation"
import { images } from "../../../imageslist"

export default function PhotoFeedid(props){
    const router = useRouter()
    console.log('props intercepting' , props.params.photoid)
    console.log('props' , props.params.photoid)
    const getphotodetail = images.filter(x => x.id == props.params.photoid)
    console.log(getphotodetail)
    return (

        <div style={{zIndex:43, position:'absolute', backgroundColor:'black', width:'97.6vw'  , height :'80vh'}} >
        PHOTO FEED id INTERCEPTING ROUTE - {props.params.photoid}
        <div style={{width:'25%' , height:'50%' , marginBottom:'5px' , cursor:'pointer'}} id={getphotodetail[0].id}><img src={getphotodetail[0].src.src}/></div>
        <button onClick={()=>{router.back()}}> close it </button>
        
        </div>
    )
}