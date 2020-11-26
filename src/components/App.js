import React from "react";
import "./App.css";
import Choose from "./choosefile";
import Images from './image';



class App extends React.Component{

  constructor() {
    super();
    this.state = { galleryOpened: false };
   //this.goToGallery=this.goToGallery.bind(this);
  }

  Gallery=()=>{
    this.setState({
      galleryOpened:true,
    });

  }
  back=()=>{
    this.setState({
      galleryOpened:false,
    })
    this.goToGallery();
  }

  goToGallery() {
    
    if(this.state.galleryOpened)
    {
      console.log("yes");
      return(<div>
      <button onClick={this.back}>Back</button>
      <Images/></div>
        );
    }
    else
    {
      return<button className="goToGallery" onClick={this.Gallery}>View Gallery</button>
    }
   
   
  }

  render(){
    return(
      <div id="main" className="row" >
        <header><b>Welcome to Photo Gallery!!!</b></header>
        <div className="column">
          <Choose/>
        {this.goToGallery()}</div>
         
          <div className="column">
          right
            
          </div>
        </div>

    
    )
  }
}

export default App;