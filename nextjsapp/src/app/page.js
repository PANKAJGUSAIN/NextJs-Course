import Link from "next/link";

export default function Home (){
    return (
        <>
        <h1>HOME PAGE</h1>
        <Link  href={'/Dashboard'} > Dashboard GET  Api route </Link>
        <br/>
        <Link  href={'/users'} > Case : when page.js and route.js is placed in same place (router.js will run ) </Link>
        </>
    )
}