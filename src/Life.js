import React from 'react'

class Life extends React.Component {
    
  constructor(props){
    console.log('constructor()')
    super(props)
    this.state={intervall:null,
    timer: 0};
  }

  componentDidMount(){
    console.log('didmount')
    this.setState({
      intervall: setInterval(() => {
        this.setState({timer : this.state.timer + 1});
        
      }, 1000),
    });
  }

  componentDidUpdate (){
    console.log('didupdate')
  }

  componentWillUnmount(){
    console.log('Unmount');
    clearInterval(this.state.intervall);
  }

  render(){ 
    console.log("render");
    return(
    <div>
        <h1> {this.state.timer}</h1>
    </div>)
}
}


export default Life;
