import styled from 'styled-components';

export const ProductsContainer = styled.div`
   width:100%; 
  min-height: 80vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
  max-width:100%
  
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /*justify-content: center;*/
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width:90%;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color:white;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  color:white;

`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color:white;

`;

export const ProductButton = styled.button``;