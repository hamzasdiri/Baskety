import React from "react";
import "./CartItem.css";
import { connect } from "react-redux";
import {removeFromCart,} from "../Redux/Shopping/shopping.actions";

const CartItem = ({image,name,qty,id,desc,price,item,removeFromCart,cart }) => {
  

  function remove(){
    removeFromCart(item.id);
    localStorage.setItem('newCart',JSON.stringify(JSON.parse(localStorage.getItem('newCart')).filter(x => x.id !== id)))
  }
 


  return (
    <>
     <section className="container">

              <div className="col left">
                <div className="thumbnail">
                  
                    <img src={image} alt={name} style={{height:'200px',width:'200px'}} />
                 
                </div>
                <div className="detail">
                  <div className="name">
                    {name}
                  </div>
                  <div className="description">{desc}</div>
                  <div className="price">{price} DT</div>
                </div>
              </div>
              <div className="col right">
                <div className="quantity">
          
                  <div className="cartItem__qty">
          <label className="qty" >Qty</label>
          <div className="itemQty">{qty}</div>
        </div>
                  
        </div>

                <div className="remove">
                  <svg
                  onClick={remove }          
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
              
              </section>

    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);