"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// for now css is currently not working as we have to specifically specify to take css as css
const activecolor ={
    textColor:'red'
}

const motactivecolor ={
    textColor:'blue'
}

export default function authlayout({children}){
    const navigationlinks = [
        {name:"Register" , href:"/register"},
        {name:"login" , href:"/login"},
        {name:"forgot-password" , href:"/forgot-password"},
    ]
    const pathname = usePathname()
    
    return(
        <>
            {
                navigationlinks.map((linkitem) =>{
                const isactive = pathname.startsWith(linkitem.href)
                return (
                    <Link className={isactive ? 'activecolor':'motactivecolor'} href={linkitem.href}  key={linkitem.name}>{linkitem.name}|</Link>
                        )
                })
            }

            {children}
        </>
    )
} 