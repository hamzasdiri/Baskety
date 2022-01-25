import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Prod from './components/Prod';
import Cart from './components/Cart';
import { Provider } from "react-redux";
import store from "./Redux/Store";


function App() {
  
  return (
    <Router>

    <>
    <Provider store={store}>

<Routes>

<Route exact path='/' element={<Home />} />
<Route path='/Contact' element={<Contact />} />
<Route path='/SignUp' element={<SignUp />} />
<Route path='/SignIn' element={<SignIn />} />
<Route path="/Prod"  element={<Prod />} />
<Route path="/Cart" element={<Cart />} />
<Route path='*' element={<NotFound />} />


</Routes>
</Provider>

    </>
    </Router>

  );
}
ReactDOMServer.renderToString(<App />);

export default App;