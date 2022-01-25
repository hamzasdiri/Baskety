import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import './Footer.css';

const  Footer = function() {
  
    return (
      <div>
        <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                        <li><Link to={"/Contact"} style={{ textDecoration: 'none',color:'rgb(216, 211, 211)' }}>CONTACT</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>CONTACT INFORMATIONS</h3>
                        <ul>
                            <li>676 INSAT Centre Urbain Nord BP، Tunis Cedex 108</li>
                            <li>(+216) 00 000 000</li>
                            <li>info@baskety.tn devis@baskety.tn</li>
                            <li>7 jours sur 7,Du Lundi Au Samedi: 08h00 à 19h00Dimanche: 09h00 à 15h00</li>
                            <p className="copyright">BASKETY © 2021</p>
                        </ul>
                    </div>
                   
                    <div className="col-lg-3 item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a>
                        
                    </div>
                    
                </div>
            </div>
        </footer>
    </div>
      </div>
    );
  }
;

export default Footer;