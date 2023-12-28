import Link from "next/link"

export const metadata ={
    title:'Blog'
}

export default function blog (){
    return (
    <>
    <Link href="/">HOME</Link>
    <h1>Blog page</h1>
    </>
    )
}