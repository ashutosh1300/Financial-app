import "./Footer.css";
import { useState, useEffect } from "react";
function Footer()
{
     return (
     <div className="footer_section layout_padding">
      {/*footer section start */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">Corporate Office</h4>
            <div className="location_text"><img src="assets/images/map-icon.png" /><span className="padding_left_15">Location : Indore(MP)</span></div>
            <div className="location_text"><img src="assets/images/call-icon.png" /><span className="padding_left_15">+01 9876543210</span></div>
            <div className="location_text"><img src="assets/images/mail-icon.png" /><span className="padding_left_15">demo@gmail.com</span></div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">About Financial</h4>
            <p className="dolor_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">Instagram</h4>
            <div className="footer_images">
              <div className="footer_images_left">
                <div className="image_12"><img src="assets/images/img-12.png" /></div>
                <div className="image_12"><img src="assets/images/img-12.png" /></div>
                <div className="image_12"><img src="assets/images/img-12.png" /></div>
              </div>
              <div className="footer_images_right">
                <div className="image_12"><img src="assets/images/img-12.png" /></div>
                <div className="image_12"><img src="assets/images/img-12.png" /></div>
                <div className="image_12"><img src="assets/images/img-12.png" /></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">Newsletter</h4>
            <input type="text" className="mail_text" placeholder="Enter your email" name="Enter your email" />
            <div className="subscribe_bt"><a href="#">Subscribe</a></div>
            <div className="footer_social_icon">
              <ul>
                <li><a href="#"><img src="assets/images/fb-icon1.png" /></a></li>
                 <li><a href="#"><img src="assets/images/twitter-icon1.png" /></a></li>
                <li><a href="#"><img src="assets/images/linkedin-icon1.png" /></a></li>
                <li><a href="#"><img src="assets/images/youtub-icon1.png" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* copyright section start */}
        <div className="copyright_section">
          <div className="copyright_text">Copyright 2023 All Right Reserved By <a href="https://html.design">Financial Services</a></div>
        </div>
        {/* copyright section end */}
      </div>
    {/*footer section end */}
    </div>
 )
}
 export default Footer;