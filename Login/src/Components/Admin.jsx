import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';

export default function Admin() {
  const [decodeToken,setDecodeToken]= useState([])

 useEffect(()=>{
  const token = Cookies.get('token')
  setDecodeToken(jwtDecode(token))
 },[])
const {first_name,last_name,email_id,role}=decodeToken

  return (
   <>
       <h1>this is admin page</h1> 
       <p>Name:-{first_name}</p>
       <p>Last Name:-{last_name}</p>
       <p>Email:-{email_id}</p>
       <p>Role:-{role}</p>
   </>
  )
}
