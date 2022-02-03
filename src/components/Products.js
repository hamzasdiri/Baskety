import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import {Provider} from 'react-redux';
import store from '../Redux/Store';
import { Container } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import './Products.css';

const Products=({products})=>{

    return(
    <>
    <div className="cont" >
            <br />
    <Provider store={store}>
         <Container >
                  <h1  style={{  textAlign: 'center',fontSize: 'clamp(2rem, 2.5vw, 3rem)',  color:'white'}}>Choose Your Favorite</h1>
                  <MDBContainer>
      <MDBRow>
                     {products.map((product) => <MDBCol size="12" sm="6" lg="4" style={{justifyContent: 'center'}}><Product key={product.id} product={product} /> </MDBCol>)}       
                     </MDBRow>
    </MDBContainer>

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