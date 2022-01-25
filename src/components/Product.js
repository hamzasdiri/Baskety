import React from 'react';
import {
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
} from './ProductsElements';
 import './Products.css';
 import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../Redux/Shopping/shopping.actions";
const Product =({ product })=> {
 
  return (
    
    <div className="prodItem">
      <ProductsHeading> </ProductsHeading>
      <ProductWrapper >
        
          
            <ProductCard className="product-card" >
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price} DT</ProductPrice>
                {product.button}
              </ProductInfo>

            </ProductCard>
          
        
      </ProductWrapper>
    </div >
  );
      }

      const mapDispatchToProps = (dispatch) => {
        return {
          addToCart: (id) => dispatch(addToCart(id)),
          loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
        };
      };
      
      export default connect(null, mapDispatchToProps)(Product);