import React from 'react';
import video1 from "../img/background.mp4";

class Firstpage extends React.Component {

    render(){

    return(

        <>
        <video autoPlay loop muted style={{height:"auto",width:"100%"}} src={video1} type="video/mp4" className="video">
        </video>  
              
        </>
    );
    }

}

export default Firstpage;