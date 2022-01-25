import React from 'react';
import './Carousel.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel(props){
    

    return(

        <>
<AliceCarousel mouseTracking disableButtonsControls controlsStrategy="responsive" autoPlay={true} infinite={true} autoPlayInterval={500} >
<img src={props.image1} alt='...'  style={{height:"500px",width:'500px'}}  className="sliderimg"/>
    <img src={props.image2} alt='...' style={{height:"500px",width:'500px'}} className="sliderimg"/>
    <img src={props.image3} alt='...' style={{height:"500px",width:'500px'}} className="sliderimg"/>
</AliceCarousel>
              
        </>
    );
    

}

export default Carousel;