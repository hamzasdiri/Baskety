import React from 'react';
import Prod1 from './Prod1';
import {useLocation} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
function Prod(){
    const location = useLocation()
 

    let  produc=[{title:location.state.title,
        description:location.state.description,
         price:location.state.price,
           img:location.state.img,
            id:location.state.id,
            image1:location.state.image1,
            image2:location.state.image2,
            image3:location.state.image3}];

            window.scrollTo(0, 0);
            if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
                if(produc[0].id===undefined){
                    produc=JSON.parse(localStorage.getItem('prod'));
                }
                else{
                    localStorage.setItem('prod', JSON.stringify(produc));
                    produc=JSON.parse(localStorage.getItem('prod'));
                }
            }
    return(
        <div>
            <Navbar />
            <Prod1 product={produc[0]}/>
             <div className="espace" style={{marginTop:100}}></div>
             <Footer />
        </div>
    );
}


export default Prod;