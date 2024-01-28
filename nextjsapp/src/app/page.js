import Link from "next/link";

export default function Home (){
    return (
        <>
        <h1>HOME PAGE</h1>
        <Link  href={'/Dashboard'} > Dashboard get  Api route </Link>
        </>
    )
}