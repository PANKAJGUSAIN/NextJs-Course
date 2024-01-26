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
        if you use the below link "as it is a anchor tag" it will cause a full page refresh so intercepting route won't work
        <br/>
        <a href="/photo-feed/2" > Click me </a>
        <br/>
        <br/>
        click on the image to make the intercepting route work as we are using router.push or Link tag
        <br/>
        
        <div style={{textAlign:'center' ,marginBottom:'20px'}}>PHOTO FEED</div>
        <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'left' , margin:'10px'}}>
        {images.map((i,index) =>{
            return (<div style={{width:'25%' , height:'50%' , marginBottom:'5px' , cursor:'pointer'}} key={index} id={i.id} onClick={()=>handleimageclick(i)}><img src={i.src.src}/></div>)
        })}
        </div>
        </>
    )
}