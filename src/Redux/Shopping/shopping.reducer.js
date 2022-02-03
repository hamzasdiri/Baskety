import * as actionTypes from './shopping.types';
import { Link } from "react-router-dom";
import React from 'react';
import './shopping.css'
import bas1 from "../../img/bas1.png";
import bas2 from "../../img/bas2.png";
import bas3 from "../../img/bas3.png";
import bas4 from "../../img/bas4.png";
import bas5 from "../../img/bas5.png";
import bas6 from "../../img/bas6.png";
import bas7 from "../../img/bas7.png";
import bas8 from "../../img/bas8.png";
import bas9 from "../../img/bas9.png";
import bas01 from "../../img/bas01.PNG";
import bas001 from "../../img/bas001.PNG";
import bas02 from "../../img/bas02.PNG";
import bas002 from "../../img/bas002.PNG";
import bas03 from "../../img/bas03.PNG";
import bas003 from "../../img/bas003.PNG";
import bas04 from "../../img/bas04.PNG";
import bas004 from "../../img/bas004.PNG";
import bas05 from "../../img/bas05.PNG";
import bas005 from "../../img/bas005.PNG";
import bas06 from "../../img/bas06.PNG";
import bas006 from "../../img/bas006.PNG";
import bas07 from "../../img/bas07.PNG";
import bas007 from "../../img/bas007.PNG";
import bas08 from "../../img/bas08.PNG";
import bas008 from "../../img/bas008.PNG";
import bas09 from "../../img/bas09.PNG";
import bas009 from "../../img/bas009.PNG";

/* for the linkk with parametres 
name: <Link to={{
          pathname: `./Prod`,
          title:'NIKE AIR',
          price:'350DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          image:bas1,
          image1:bas01,
          image2:bas001
        }}style={{ textDecoration: 'none' }} ><div className="nike" style={{color:'aliceblue',textDecoration: 'none'}}>NIKE</div></Link>
*/

export const init_state={
    products:[{
        id:1,
        img: bas1,
        alt: 'NIKE',
        name: 'NIKE',
        desc:
        <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price: 350,
          
        
        button:<Link to="/Prod" state={{ id:1,image1:bas1,
          image2:bas01,
          image3:bas001,
          title: "NIKE AIR",
          price:'350DT',
          description:'Disponible chez nous Pointure 36/37/38/39/40 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas1 }}><button className='lastbtn'>View Product</button></Link>
      },
      {id:2,
        img: bas2,
        alt: 'NIKE',
        name:  'NIKE',
        desc:
          <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price: 330,
          
        button: <Link to="/Prod" state={{ 
          id:2,image1:bas2,
          image2:bas02,
          image3:bas002,
          title:'NIKE AIR',
          price:'330DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas2
        }}><button className='lastbtn'>View Product</button></Link>
      },
      {id:3,
        img: bas3,
        alt: 'NIKE',
        name: 'NIKE',
        desc:
        <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price: 370,
          
        button: <Link to="/Prod" state={{ 
          id:3,image1:bas3,
          image2:bas03,
          image3:bas003,
          title:'NIKE AIR',
          price:'370DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas3
        }}><button className='lastbtn'>View Product</button></Link>
      }
    ,
    
      {id:4,
        img: bas4,
        alt: 'NIKE',
        name: 'NIKE',
        desc:
          <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price: 300,
          
        button: <Link to="/Prod" state={{ 
          id:4,image1:bas4,
          image2:bas04,
          image3:bas004,
          title:'NIKE AIR',
          price:'300DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas4
        }}style={{ textDecoration: 'none' }} ><button className='lastbtn'>View Product</button></Link>
      },
      {id:5,
        img: bas5,
        alt: 'NIKE',
        name: 'NIKE',
        desc:
        <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price: 280,
          
        button: <Link to="/Prod" state={{ 
          id:5,image1:bas5,
          image2:bas05,
          image3:bas005,
          title:'NIKE AIR',
          price:'280DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas5
        }}style={{ textDecoration: 'none' }} ><button className='lastbtn'>View Product</button></Link>
      },
      {id:6,
        img: bas6,
        alt: 'NIKE',
        name: 'NIKE',
        desc:
        <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price: 310,
          
        button: <Link to="/Prod" state={{ 
          id:6,image1:bas6,
          image2:bas06,
          image3:bas006,
          title:'NIKE AIR',
          price:'310DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas6
        }}style={{ textDecoration: 'none' }} ><button className='lastbtn'>View Product</button></Link>
      }
    ,
    
        {id:7,
          img: bas7,
          alt: 'NIKE',
        name: 'NIKE',
        desc:
        <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price:400,
          
        button: <Link to="/Prod" state={{ 
          id:7,image1:bas7,
          image2:bas07,
          image3:bas007,
          title:'NIKE AIR',
          price:'400DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas7
        }}style={{ textDecoration: 'none' }} ><button className='lastbtn'>View Product</button></Link>
        },
        {id:8,
          img: bas8,
          alt: 'NIKE',
        name: 'NIKE',
        desc:
        <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price: 240,
          
        button: <Link to="/Prod" state={{ 
          id:8,image1:bas8,
          image2:bas08,
          image3:bas008,
          title:'NIKE AIR',
          price:'240DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas8
        }}style={{ textDecoration: 'none' }} ><button className='lastbtn'>View Product</button></Link>
        },
        {id:9,
          img: bas9,
          alt: 'NIKE',
        name: 'NIKE',
        desc:
        <div className="desc"> Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e) </div>,
          price: 220,
          
        button: <Link to="/Prod" state={{ 
          id:9,image1:bas9,
          image2:bas09,
          image3:bas009,
          title:'NIKE AIR',
          price:'220DT',
          description:'Disponible chez nous Pointure 38/39/40/41/42 Livraison à domicile Satisfait(e) ou remboursé(e)',
          img: bas9
        }}style={{ textDecoration: 'none' }} ><button className='lastbtn'>View Product</button></Link>
        }],//id,title,des,price,img



    cart:[],//id,title,des,price,img,qty

    currentItem:null,
}


const shopreducer=(state=init_state,action)=>{
switch(action.type){
    case actionTypes.ADD_TO_CART:{

       // Great Item data from products array
       const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
     

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )    

          : [...state.cart, { ...item, qty: 1 },],
      };
      

    }
    case actionTypes.REMOVE_FROM_CART:
       return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
          default:return(state);
}

};



export default shopreducer;