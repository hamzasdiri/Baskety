import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import {Provider} from 'react-redux';
import store from '../Redux/Store';
import { Container } from 'react-bootstrap';
import './Products.css';

const Products=({products})=>{

    return(
    <>
    <div className="cont" >
            <br />
    <Provider store={store}>
         <Container >
                  <h1  style={{  textAlign: 'center',fontSize: 'clamp(2rem, 2.5vw, 3rem)',  color:'white'}}>Choose Your Favorite</h1>
                  <div className="grid">
                     {products.map((product) => <div className="Item"> <Product key={product.id} product={product} /> </div>)}       
                  </div>

          </Container>
    </Provider>
       <div style={{marginTop:'5px'}}></div>

        </div>
        </>
    );
}



const mapStateToProps=state =>{
return{
    products:state.shop.products
}
}
export default connect(mapStateToProps)(Products);