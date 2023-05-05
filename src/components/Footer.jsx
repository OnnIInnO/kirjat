import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
import lukukeskus from "../images/lukukeskus.jpg"

function Footer() {
        return (
            <div class="social-container">
                {/* <h2>Follow us on:</h2> */}
                <a href = "https://www.facebook.com/"
                className="Facebook-Social">
                    <FontAwesomeIcon icon ={faFacebook} size="4x" color ="white" />
                </a>
                <a href = "https://www.instagram.com/"
                className="Instagram-Social">
                    <FontAwesomeIcon icon ={faInstagram} color ="white" size="4x"/>
                </a>
            </div>
    );
}
 
export default Footer;