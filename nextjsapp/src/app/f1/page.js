import Link from "next/link";

export default function f1(){
    return(
        <>
        <div>F1 PAGE</div>
        <Link href='/f1/f2'>F2 same level (.)</Link>
        <br/>
        <Link href='/f1/f4'>F4 one  level above (..)</Link>
        </>
    )
}