import React from 'react';
import  FirstPage  from './FirstPage';
import Products from './Products';
import { connect } from "react-redux";
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';
function Home({cart}){

    return(

          <>
          <Navbar />
          <FirstPage />       
          <Products />
          <Footer />
          </>
        
    );
    
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Home);