import Link from "next/link";

export default function ProductList(){
    const productid = 100
    return(
        <>
        <Link href="/">HOME</Link>
        <h1>Product List</h1>
        {/* difference between using "/products/1" or "products/1" in href? */}
        <h1><Link href="products/1">Product 1</Link></h1>
        <h1><Link href="products/2">Product 2</Link></h1>
        <h1><Link href="products/3" replace>Product 3 with "replace" prop</Link></h1>
        <h1><Link href="products/4">Product 4</Link></h1>
        <h1>Dynamic Route </h1>
        <h1><Link href={`products/${productid}`}>Product {productid}</Link></h1>
        </>
    ) 
}