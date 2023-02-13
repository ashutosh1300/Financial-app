import "./Service.css";
import {useState,useEffect} from "react";

function Service()
{
  const [ServiceContent, setServiceContent] = useState();

  useEffect(()=>{
      setInterval(()=>{
      
        if(localStorage.getItem("role")== "admin")
        {
          setServiceContent( <div className="services_section layout_padding">
          {/*Service section start */}
       <div className="container">
         <div className="row">
           <div className="col-md-8">
             <h1 className="services_taital">ASHUTOSH JAISWAL</h1>
             <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
             <div className="moremore_bt"><a>Read More </a></div>
           </div>
           <div className="col-md-4">
             <div><img src="assets/images/img-1.png" className="image_1"/></div>
           </div>
         </div>
       </div>
       {/*Service section end */}
     </div>)
        }
      else if(localStorage.getItem('role')=="user")
         {
          setServiceContent(<div className="services_section layout_padding">
          {/*Service section start */}
       <div className="container">
         <div className="row">
           <div className="col-md-8">
             <h1 className="services_taital">User SERVICES Section</h1>
             <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
             <div className="moremore_bt"><a>Read More </a></div>
           </div>
           <div className="col-md-4">
             <div><img src="assets/images/img-1.png" className="image_1"/></div>
           </div>
         </div>
       </div>
       {/*Service section end */}
     </div>)

         }
         else{
          setServiceContent(<div className="services_section layout_padding">
          {/*Service section start */}
       <div className="container">
         <div className="row">
           <div className="col-md-8">
             <h1 className="services_taital">WELCOME TO FINAnCIAL SERVICES</h1>
             <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
             <div className="moremore_bt"><a>Read More </a></div>
           </div>
           <div className="col-md-4">
             <div><img src="assets/images/img-1.png" className="image_1"/></div>
           </div>
         </div>
       </div>
       {/*Service section end */}
     </div>)
         }
    });
  },[]);
   return (
    <div>
      {ServiceContent}
    </div>
     
 )
}
 export default Service;