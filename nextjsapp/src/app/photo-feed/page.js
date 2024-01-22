"use client"
import { images } from "./imageslist"
import { useRouter } from "next/navigation";
export default function PhotoFeed(){
    const router = useRouter();
    console.log('i' , images)
    const handleimageclick = (selectimagedetails) =>{
        console.log(selectimagedetails)
        router.push(`/photo-feed/${selectimagedetails.id}`)
    }
    return (
        <>
        <div style={{textAlign:'center' ,marginBottom:'20px'}}>PHOTO FEED</div>
        <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'left' , margin:'10px'}}>
        {images.map(i =>{
            return (<div style={{width:'25%' , height:'50%' , marginBottom:'5px' , cursor:'pointer'}} id={i.id} onClick={()=>handleimageclick(i)}><img src={i.src.src}/></div>)
        })}
        </div>
        </>
    )
}