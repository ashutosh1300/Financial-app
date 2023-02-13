import "./Userhome.css";
import { Navigate } from "react-router-dom";

function Userhome()
{
   return(
   <div className="what_we_do_section layout_padding">
        {/*Userhome section start */}
      <div className="container">
        <h1 className="what_taital">WELCOME TO USER PANEL</h1>
        
       
      </div>
       {/*Userhome section end */}
       <Navigate to="/service"></Navigate>
    </div>
 )
}
 export default Userhome;