import Link from "next/link";

export default function testme(){
    return <div style={{backgroundColor:'yellowgreen' , width:'50%' , textAlign:'center'}}>
    Notifications
    <Link href='/complexDashboard/archived'>Archived</Link>  
   </div>
}