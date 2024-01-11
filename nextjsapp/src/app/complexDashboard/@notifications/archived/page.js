import Link from "next/link";

export default function archived(){
    return <div style={{backgroundColor:'yellowgreen' , width:'50%' , textAlign:'center'}}>
    Archived Notifications
    <Link href='/complexDashboard'>Default</Link>  
   </div>
}