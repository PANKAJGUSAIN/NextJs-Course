import {headers} from 'next/headers'

export async function GET(request){
    const reqHeaders = new Headers(request.headers)
    const headerList = headers()
    console.log(reqHeaders.get('Authorization'))      // way 1
    console.log(request.headers.get('Authorization'))  // way 2
    console.log(headerList.get('Authorization'))        // way 3
    return new Response('<h1>PROFILE GET API</h1>',{
        headers :{
            'Content-Type' : 'text/html'
        }
    })
}