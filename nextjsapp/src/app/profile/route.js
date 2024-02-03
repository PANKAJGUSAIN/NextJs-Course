import {headers , cookies} from 'next/headers'

export async function GET(request){
    // 
    const reqHeaders = new Headers(request.headers) // web api to read header
    const headerList = headers()                    // nexjs api to read header

    // get header
    console.log(reqHeaders.get('Authorization'))      // way 1
    console.log(request.headers.get('Authorization'))  // way 2
    console.log(headerList.get('Authorization'))        // way 3

    // get cookie
    console.log(request.cookies.get('theme')) // way1 
    console.log(cookies().get('requestperpage')) // way2

    //Note : cookies() supports other methods like has delete and so on 

    
    // set a cookie
    cookies().set("requestperpage" ,"20")   // set a cookie way 2

    return new Response('<h1>PROFILE GET API</h1>',{
        headers :{
            'Content-Type' : 'text/html',    // set a header
            'Set-Cookie' :'theme=dark'       // set a cookie way1
        }
    })
}