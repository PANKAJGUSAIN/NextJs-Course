export default function Complexdashlayout(props){
    return(
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
    )
}