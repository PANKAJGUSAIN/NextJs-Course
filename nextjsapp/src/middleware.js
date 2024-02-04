import { NextResponse } from "next/server"; // extends the standard Response webapi


// way 1   this middleware() fn will only work if it maches the url defined in config
// export function middleware(request){
//     return NextResponse.redirect(new URL('/' , request.url))
// }

// export const config = {

//     matcher :'/profile'
// }



// way2 using condtional statement  this middleware() fn will be called everytime to check the condition
// export function middleware(request){
//     if(request.nextUrl.pathname === '/profile'){
//         // return NextResponse.redirect(new URL('/' , request.url))
//         return NextResponse.rewrite(new URL('/' , request.url)) // rewrite means the url will remain same ie '/profile' but the content will be of '/'
//     }
    
// }


// custom cookies and header 
// The NextResponse.next() method in Next.js creates a new NextResponse object that tells Next.js to continue processing the request. However, this doesn’t mean that the processing happens immediately. There’s still time to modify the NextResponse object before it’s returned from the middleware function.
// Here’s the sequence of events:
// const response = NextResponse.next(): This line creates a new NextResponse object.
// response.cookies.set('theme', 'dark'): This line sets a cookie on the response object. Even though NextResponse.next() was called, the response object still exists in memory and can be modified.
// return response: This line returns the response object, which now includes the set cookie. At this point, Next.js continues processing the request.
// So, even though NextResponse.next() is called, you can still modify the response object before it’s returned. This is why you’re able to set a cookie after calling NextResponse.next().
export function middleware(request){
    const response = NextResponse.next()
    const themePrefer = request.cookies.get('theme')
    if(!themePrefer){
        response.cookies.set('theme', 'dark')
    }
    return response
}
