import "./Adminhome.css";
import { Navigate } from "react-router-dom";

function Adminhome()
{
   return(
   <div className="what_we_do_section layout_padding">
        {/*Adminhome section start */}
      <div className="container">
        <h1 className="what_taital">WELCOME TO ADMIN PANEL</h1>
       
      </div>
      <Navigate to ="/service" />
       {/*Adminhome section end */}
    </div>
 )
}
 export default Adminhome;