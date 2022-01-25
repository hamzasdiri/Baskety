import React from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';


class Contact extends React.Component{
  constructor(props){
    super(props);
    this.send=this.send.bind(this);

  }
  state={text : "",name:"",email:""}
  componentDidMount() {
    window.scrollTo(0, 0);
}
  send(){
    console.log(this.state.text,this.state.name,this.state.email);
    if(this.state.text!==""){
      if(this.state.name!==""){
        if(this.state.email!==""){document.getElementById('sendLetter').addEventListener("click", document.body.classList.add("sent"));
        document.getElementById("sendLetter").style.display = "none";}
        else{}
      }
      else{}
    }
    else{}
  
  }
  render(){
    return(
      <>
      <Navbar />
      <div>
        
        <a name="contact"/>
        <div className="wrapper centered container">
          <article className="letter">
            <div className="side">
              <h1>Contact us</h1>
              <p>
                <textarea placeholder="Your message" defaultValue={this.state.text} className="txt" name="text" onChange={(e)=>this.state.text=e.target.value}/>
              </p>
            </div>
            <div className="side">
              <p>
                <textarea type="text" placeholder="Your name" defaultValue={this.state.name} className="inpt" name="name" onChange={(e)=>this.state.name=e.target.value}/>
              </p>
              <p>
                <textarea type="email" placeholder="Your email" defaultValue={this.state.email} className="inpt" name="email" onChange={(e)=>this.state.email=e.target.value}/>
              </p>
              <p>
                <button id="sendLetter" onClick={this.send}>Send</button>
              </p>
            </div>
          </article>

          <div className="envelope front" />
          <div className="envelope back" />
        </div>

        <p className="result-message centered">Thank you for your message</p>
        <div className="esp"></div>
        
      </div>
      <Footer />
      </>
    );

  }
}

export default Contact;