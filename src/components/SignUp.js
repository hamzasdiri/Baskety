import React from 'react';
import './Sign.css';
import logo from '../img/basket.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function SignUp(){
  window.scrollTo(0, 0);
    return( 
<div>
<Navbar />
<section className="signup">
        <div className="container sign">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                  <input type="text" name="name" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                  <input type="email" name="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                  <input type="password" name="pass" id="pass" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                  <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                </div>
                <div className="form-group">
                  <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure><img src={logo} alt='' className="img-responsive"/></figure>
              <div className="signup-image-link"><Link to={"/SignIn"} style={{ textDecoration: 'none',color:'black' }}>I am already member</Link></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>

    );
}

export default SignUp;