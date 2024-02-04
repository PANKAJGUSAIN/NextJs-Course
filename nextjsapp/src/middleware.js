import { NextResponse } from "next/server"; // extends the standard Response webapi


// way 1   this middleware() fn will only work if it maches the url defined in config
export function middleware(request){
    return NextResponse.redirect(new URL('/' , request.url))
}

export const config = {

    matcher :'/profile'
}