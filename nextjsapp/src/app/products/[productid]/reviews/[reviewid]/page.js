import {notFound} from "next/navigation"


// for generating randon number to throw an error
function getRandomInt(count){
    return Math.floor(Math.random()*count)
}

export default function ReviewDetail(props){ 

    // to throw an error to user error.js file
    const random = getRandomInt(2)
    if(random === 1){
        throw new Error('Error Loading Review')
    }


    if(parseInt(props.params.reviewid) > 1000){
        notFound()
    }
    return <h1>Review {props.params.reviewid} for  product {props.params.productid}</h1>
}