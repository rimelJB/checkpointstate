
import React from  'react';
import './App.css';
import propic from './propic.jpg';
import Life from './Life';

class App extends React.Component{

  state={
    MyStateapp:'My State app',
    FullName:"Rimel Jabnoun",
    Bio:'https://www.linkedin.com/in/rimeljabnoun',
    Profession:"Js Web developper ",
    imgSrc: propic,
    show: false};

   
  
  render(){ 
    var handleshow = ()=>{
    this.setState({show:!this.state.show})
    };
    
    return (
      <>
      <button onClick={handleshow}> {this.state.show? "hide":"show"} </button>
      {this.state.show ? 
      <div className='final'> 
        <Life />
        <br/>
        <h1> {this.state.MyStateapp}</h1>
        <br/>
        <h1>FullName : <span>{this.state.FullName}</span></h1>
        <br/>
        <h1>Bio: <span>{this.state.Bio}</span></h1>
       <br/>
       <h1>Profession: <span>{this.state.Profession}</span></h1>
        <br/>
        <img src={this.state.imgSrc} alt='mypic'/>
        <br/>
       
       </div>  : ("click to see this")}
       

      </>
      
    )}
  };


export default App;
