import { NextResponse } from "next/server"; // extends the standard Response webapi


// way 1   this middleware() fn will only work if it maches the url defined in config
// export function middleware(request){
//     return NextResponse.redirect(new URL('/' , request.url))
// }

// export const config = {

//     matcher :'/profile'
// }



// way2 using condtional statement  this middleware() fn will be called everytime to check the condition
export function middleware(request){
    if(request.nextUrl.pathname === '/profile'){
        return NextResponse.redirect(new URL('/' , request.url))
    }
    
}
