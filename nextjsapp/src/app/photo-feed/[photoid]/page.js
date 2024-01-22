"use client"

import { images } from "../imageslist"

export default function PhotoFeedid(props){
    console.log('props' , props.params.photoid)
    const getphotodetail = images.filter(x => x.id == props.params.photoid)
    console.log(getphotodetail)
    return (
        <>
        PHOTO FEED id - {props.params.photoid}
        <div style={{width:'25%' , height:'50%' , marginBottom:'5px' , cursor:'pointer'}} id={getphotodetail[0].id}><img src={getphotodetail[0].src.src}/></div>
        </>
    )
}