import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function Buyer() {
  const [decodeToken, setDecodeToken] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setDecodeToken(jwtDecode(token));
  }, []);
  const { first_name, last_name, email_id, role } = decodeToken;

  return (
    <>
      <h1>this is Buyer page</h1>
      <p>Name:-{first_name}</p>
      <p>Last Name:-{last_name}</p>
      <p>Email:-{email_id}</p>
      <p>Role:-{role}</p>
    </>
  );
}
