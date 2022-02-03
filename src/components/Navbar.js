import React  from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,Container ,Form,FormControl,Button} from 'react-bootstrap';
import logoo from '../img/baskett.png';

import './Navbar.css';
import logo from '../img/shop-cart.png';

const Navbarr = ({cart}) => {
 
if(JSON.parse(localStorage.getItem('newCart'))!==null);
else{localStorage.setItem('newCart',JSON.stringify(cart));}



  let count = 0;
  JSON.parse(localStorage.getItem('newCart')).map(function(item){
    return(
count+=item.qty);
  });
 
    return (
        <>
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center navtest" fixed="top">
  <Container>
        <img src={logoo} height="50" width="50" className="img-responsive" alt="1"/>
  <Navbar.Brand  className="brand"><h1><Link to={"/"} style={{ textDecoration: 'none',color: '#FFF' }}>BASKETY</Link></h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav ">
    <Nav className="me-auto">   
    </Nav>

    <Form className="d-flex">
      <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" /> 
      <Button variant="outline-success" className="search-btn">Search</Button>
    </Form>

    <Nav>
      <Nav.Link  onClick={e => {e.preventDefault(); document.body.scrollIntoView(false) }} style={{ textDecoration: 'none',color:'rgb(216, 211, 211)' }}>ABOUT</Nav.Link>
      <Nav.Link ><Link to={"/Signup"} style={{ textDecoration: 'none',color:'rgb(216, 211, 211)' }}>SIGNUP/LOGIN</Link></Nav.Link>
    </Nav>
     <Nav>
   <Nav.Link>
    <Link to={"/Cart"} style={{textDecoration:'none'}}>
        <div className="navbar_cart">
          <img className="cart_image" src={logo} alt="shopping cart"/>
          <div className="cart_counter" style={{textDecoration:'none'}}>{count}</div>
        </div>
      </Link>
      </Nav.Link>
   </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    )
}




const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbarr);