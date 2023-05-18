import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
//This is the footer at the bottom of the page to show our socials
function Footer() {
        return (
            <div class="social-container">
                {/* <h2>Follow us on:</h2> */}
                <a href = "https://www.facebook.com/"
                className="Facebook-Social">
                    <FontAwesomeIcon className ="mx-4" icon ={faFacebook} size="4x" color ="white" />
                </a>
                <a href = "https://www.instagram.com/"
                className="Instagram-Social">
                    <FontAwesomeIcon icon ={faInstagram} color ="white" size="4x"/>
                </a>
            </div>
    );
}
 
export default Footer;