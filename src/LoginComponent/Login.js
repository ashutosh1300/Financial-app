import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { _userapiurl } from "../ApiUrl";
import {useNavigate} from "react-router-dom";

function Login()
{
  const navigate = useNavigate();         //navigate instance bna k use kra..
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  
  const handleSubmit=(evt)=>{
   evt.preventDefault();

   if(email==undefined)
   setOutput("*Email is required")

   else if(password==undefined)
    setOutput("*Password is required")

   else 
   {
     let loginDetails={"email":email,"password":password};
    // console.log(loginDetails);
  
    axios.post(_userapiurl+"login",loginDetails).then((response)=>{
      if(response.data.token!="error")
     {
        const responseData = response.data.userDetails;
        // console.log(responseData.role);     //(isse pta chl gya ki admin h ki user..)
       localStorage.setItem("token",response.data.token);
       localStorage.setItem("_id",responseData._id);
       localStorage.setItem("name",responseData.name);
       localStorage.setItem("email",responseData.email);
       localStorage.setItem("password",responseData.password);
       localStorage.setItem("mobile",responseData.mobile);
       localStorage.setItem("address",responseData.address);
       localStorage.setItem("city",responseData.city);
       localStorage.setItem("gender",responseData.gender);
       localStorage.setItem("role",responseData.role);
       localStorage.setItem("info",responseData.info);
       /* if(responseData.role=="admin")
        setOutput("Login success as admin");
        else
        setOutput("Login success as user");  */

        responseData.role=="admin"?navigate("/admin"):navigate("/user");

    }
      else
    {      
        setOutput("Invalid user or Verify your account");
        setEmail('');
        setPassword('');
    }
}) 
   } 
  };
   return(

        // Login section start 
    <div className="what_we_do_section layout_padding">
      <div className="container">
        <h1 className="what_taital">Login Here!!!!</h1>
       
        <font style={{"color":"blue"}}>{output}</font>

<form onSubmit={handleSubmit}>  
 
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange = {e => setEmail(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange = {e => setPassword(e.target.value)} />
  </div>
 
 
  <button type="submit" class="btn btn-success">Submit</button>
</form>

      </div>
    </div>
      //  Login section end 
 )
}
 export default Login;