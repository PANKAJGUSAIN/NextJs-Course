"use client"
export default function ErrorFunction({error}){

    return (
            <div style={{backgroundColor:'grey' , textAlign:'center'}}>
                <h4>Error Occured</h4>
                <h2>{error.message}</h2>
            </div>
    ) 
}