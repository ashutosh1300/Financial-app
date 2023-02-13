import "./Header.css";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
function Header()
{

  const [HeaderContent, setHeaderContent] = useState();

  useEffect(()=>{
      setInterval(()=>{
      
        if(localStorage.getItem("role")== "admin")
        {
          setHeaderContent( 
            <div className="header_section">
          <div className="header_left">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <a>
                <img src="assets/images/logo.png"/>
              </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link"><Link to="/admin">Admin Home</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to="/manageusers">ManageUsers</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to="/addcategory">Category</Link></a>
                </li>              
                <li className="nav-item">
                  <a className="nav-link"><Link to="/logout">Logout</Link></a>
                </li>
              </ul>
            </div>
          </nav>
          </div>
          </div>)
        }
        else if(localStorage.getItem("role")== "user")
        {
          setHeaderContent( <div className="header_section">
          <div className="header_left">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <a>
                <img src="assets/images/logo.png"/>
              </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link"><Link to="/admin">User Home</Link></a>
                </li>
              
                <li className="nav-item">
                  <a className="nav-link"><Link to="/logout">Logout</Link></a>
                </li>
              </ul>
            </div>
          </nav>
          </div>
          </div>)
        }
         else
         {
          setHeaderContent(<div className="header_section">
          {/*header section start */}
          
          <div className="header_left">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <a>
                <img src="assets/images/tree-finance.jpg"/>
              </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link"><Link to="/"> Home</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to="/about">About</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to="/contact">Contact</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to="/service">Service</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to="/register">Register</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to="/login">Login</Link></a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="banner_main">
            <h1 className="banner_taital">financial <br/>Service</h1>
            <p className="banner_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
            <div className="btn_main">
              <div className="more_bt"><a>Read More </a></div>
              <div className="contact_bt"><a>Contact Us</a></div>
            </div>
          </div>
          </div>
          <div className="header_right">
          <img src="assets/images/banner-img.png" className="banner_img"/>
          </div>
          {/* header section end */}
          </div> )

         }
      
   

    },1000);
  },[]);

    return(
      <p>
        {HeaderContent}

      </p>

        
    )
}
export default Header;


