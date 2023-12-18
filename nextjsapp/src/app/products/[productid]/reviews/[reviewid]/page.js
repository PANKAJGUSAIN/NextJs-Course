import {notFound} from "next/navigation"

export default function ReviewDetail(props){ 
    if(parseInt(props.params.reviewid) > 1000){
        notFound()
    }
    return <h1>Review {props.params.reviewid} for  product {props.params.productid}</h1>
}