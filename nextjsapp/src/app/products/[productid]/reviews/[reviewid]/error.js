"use client"
export default function ErrorFunction({error , reset}){

    return (
            <div style={{backgroundColor:'grey' , textAlign:'center'}}>
                <h4>Error Occured</h4>
                <h2>{error.message}</h2>
                <button onClick={reset}>Try again</button>
            </div>
    ) 
}