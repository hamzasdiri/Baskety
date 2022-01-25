import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
class NotFound extends React.Component {

    render(){

    return(

        <>
           <h1 className='notfound'>NOT FOUND !</h1>  
           <Link  to={"/"} style={{textDecoration:'none',color:'white'}}>
           <button type="submit" value="HOME" class="Glitch">HOME</button>
           </Link>
        </>
    );
    }

}

export default NotFound;