import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = (props) => {
    return <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li className="di"><Link style={{textDecoration:'none',color:'white'}} to="/about">About Us</Link></li>
                    </ul>
                   
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><Link style={{textDecoration:'none',color:'white'}} to="/contact">Contact Us</Link></li>
                    
                </ul>
            </div>
            <div class="footer-col">
                <h4 className="oo">follow us</h4>
                <div class="social-links">
                    <a href="#"><FacebookIcon/></a>
                    <a href="#"><TwitterIcon/></a>
                    <a href="#"><InstagramIcon/></a>
                    <a href="#"><LinkedInIcon/></a>
                </div>
            </div>
        </div>
    </div>
   
</footer>
}

export default Footer;