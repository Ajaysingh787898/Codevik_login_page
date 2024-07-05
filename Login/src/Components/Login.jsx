import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Login() {
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  async function postData(e) {
    e.preventDefault();
    let response = await fetch("https://stage.ramonize.com/dashboard/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email_id: email_id, password: password }),
    });
    response = await response.json();
    if (response.success === true) {
      localStorage.setItem("login", true);
      const token = response.token
      Cookies.set('token',token,{expires:7, secure:true})
      // localStorage.setItem("token", response.token);
      // console.log("this is token", response.token);
      navigate("/admin");
    } else alert("Invalid Username or Password!!!");
  }

  return (
    <>
   
    <div className="container bg-primary">
        <form onSubmit={postData}>
          <div className="email">
            <div>
              <label>Email</label>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail_id(e.target.value)}
              value={email_id}
            />
          </div>
          <div className="password">
            <div>
              <label>Password</label>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="btnn">
          <button type="submit">Login</button>
          </div>
        </form>
      </div>
   
     
    </>
  );
}
