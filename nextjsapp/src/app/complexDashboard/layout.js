"use client"

export default function Complexdashlayout(props){
    console.log(props)
    const isLoggedIn = false
    return(
        <>
        {isLoggedIn ?
        <>
        {props.children}
        <div style={{display:'flex'}}>
        <div style={{width:'50%' , height:'400px'}} >
        {props.revenue}
        {props.users}
        </div>
        {props.notifications}
        </div>
        </>
        :<>{props.login}</>}
        </>
    )
}