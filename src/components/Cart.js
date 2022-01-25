import React, { useState, useEffect } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
const Cart = ({ cart }) => {



  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);



  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
   
    setTotalItems(items);
    setTotalPrice(price); 
    
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  cart=JSON.parse(localStorage.getItem('newCart'));
  return (
    
<>
<Navbar />
<div style={{marginTop:'50px'}} ></div>

    <header className="container">
    <h1>Shopping Cart</h1>

    <ul className="breadcrumb">
      <li><Link to="/" style={{textDecoration:'none',color:'red'}}>Home</Link></li>
      <li>Shopping Cart</li>

    <span className="count">{totalItems} items in the bag</span>    </ul>

  </header>  

  <section className="container">
    {cart.length>0 ? (
      <div>
      <ul className="products">
{cart.map((item) => (
                      <li className="row" key={item.id}>

          <CartItem  image={item.img} name={item.name} price={item.price} id={item.id} qty={item.qty} item={item}/>
          </li>
        ))}
      </ul>
     

      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span>TOTAL: ({totalItems} items)</span>
          <span>{totalPrice} DT</span>
        </div>
        <button className=" btn btn-success">
          Proceed To Checkout
        </button>
      </div>
      </div>
    ) : (
      <div className="empty-product">
        <h3>There are no products in your cart.</h3>
        <Link to="/" style={{textDecoration:'none',color:'white'}}><button className="btn btn-danger" style={{height:'70px',fontSize:'20px',width:'200px'}}>Shopping now</button></Link>
      </div>
    )}
  
    </section>
    <div style={{marginTop:'100px'}} ></div>
    <Footer />
    </>
    
  );
  
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);