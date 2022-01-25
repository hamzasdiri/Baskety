import React from 'react';
import './Prod1.css';
import { connect } from "react-redux";
import Carousel from './Carousel';
import {addToCart,} from "../Redux/Shopping/shopping.actions";

let x=0,q=0,y=0;
const Prod1=({product,addToCart,cart})=>{
 
  function add(){addToCart(product.id);y++;}

if(y===1){ 


  if(cart.length!==0 && JSON.parse(localStorage.getItem("newCart")).length===0 ){localStorage.setItem('newCart',JSON.stringify(cart));}
 
  else if(cart.length!==0 && JSON.parse(localStorage.getItem("newCart")).length!==0) {

     if(JSON.parse(localStorage.getItem('newCart')).length===cart.length){
       
       cart.map(function(item){JSON.parse(localStorage.getItem("newCart")).map(function(itemj){if(item.id===itemj.id){x=1;item.qty+=itemj.qty;}})});
          
       if(x===0){JSON.parse(localStorage.getItem("newCart")).map(function(itemj){cart.push(itemj)});}
       x=0;
       localStorage.setItem('newCart',JSON.stringify(cart));
     }
 
 
     if(JSON.parse(localStorage.getItem('newCart')).length<cart.length){localStorage.setItem('newCart',JSON.stringify(cart));}
         if(JSON.parse(localStorage.getItem('newCart')).length>cart.length){
         cart.map(function(item){
          JSON.parse(localStorage.getItem("newCart")).map(function(itemj){if(item.id===itemj.id){q=1;item.qty+=itemj.qty}})});
           if(q===1){
           JSON.parse(localStorage.getItem("newCart")).map(function(itemj){if(cart[0].id!==itemj.id) cart.push(itemj);})
            }
       if(q===0){JSON.parse(localStorage.getItem("newCart")).map(function(itemj){cart.push(itemj)})}
       localStorage.setItem('newCart', JSON.stringify(cart));
       cart=JSON.parse(localStorage.getItem("newCart"));
       q=0;
         }
     
     }
    }

    if(y===1){ y=0;document.location.reload(true);}


  
    return (
      <>
<div id="container">
    
    <div class="text text-1">{product.title}</div>
 
    <p className="information">{product.description}</p>
          
          
    <div class="select">
          <select name="format" id="format">
            <option selected disabled>Choix de la taille</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
          </select>

    </div>
           <button onClick={add} className="btn bouton btnTest">
              <span className="price">{product.price}</span>
              <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
              <span className="buy" >Get now</span>
            </button>
            <Carousel  image1={product.image1} image2={product.image2} image3={product.image3}/>

</div>
        </>
       

    );
  }




  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Prod1);