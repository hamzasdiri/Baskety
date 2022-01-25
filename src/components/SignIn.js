import React from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';
import logo from '../img/basket1.png';
import Navbar from './Navbar';
import Footer from './Footer';
function SignIn(){
    
    return( 
<div>
<Navbar />
<section className="sign-in">
        <div className="container sign">
          <div className="signin-content">
            <div className="signin-image">
              <figure><img src={logo} alt=""  className="img-responsive" style={{maxWidth:'100%'}}/></figure>
              <div className="signup-image-link"><Link to ={"/SignUp"} style={{ textDecoration: 'none',color:'black' }}>Create an account</Link></div>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                  <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                  <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                </div>
                
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" defaultValue="Log in" />
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
</div>
    );
}

export default SignIn;