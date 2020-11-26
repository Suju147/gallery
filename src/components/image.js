import React from"react";
import './image.css';

class Images extends React.Component{

    constructor(){
        super();
        this.state={
            show:true,
        }
        
    }
    
    closebutton=()=>{
        
        this.setState({
            show:'none',
        })
    }

    showImage=(imgs)=>{
        this.setState({
            show:true,
        });
        let expandImg = document.getElementById("expandedImg");
        let imgText = document.getElementById("imgtext");
        expandImg.src = imgs.target.src;
        imgText.innerHTML = imgs.target.alt;
        expandImg.parentElement.style.display = "block";
    }
    render(){
        return(
<div className="container">
<div className="row">
<div className="col">
  
    <img id="1" src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" style={{height:'100px', width:'100px'}} onClick={this.showImage} />

  
    <img id="2"src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" style={{height:'100px', width:'100px'}} onClick={this.showImage}/>
  
  
    <img id="3"src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Roses_Boutons_FR_2012.jpg"style={{height:'100px', width:'100px'}} onClick={this.showImage}/>
  
</div>
<div className="col">
  
    <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Donald_Duck.svg" style={{height:'100px', width:'100px'}} onClick={this.showImage}/>
  
  
    <img src="https://miro.medium.com/max/875/1*5lpiSFo6j5dhrr6Z6RFd8Q.jpeg" style={{height:'100px', width:'100px'}} onClick={this.showImage}/>
  
  
    <img src="https://scitechdaily.com/images/Strawberry-Moon-Over-Ocean.jpg" style={{height:'100px', width:'100px'}} onClick={this.showImage}/>
  
</div>
<div className="col">
  
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Roses_Boutons_FR_2012.jpg" style={{height:'100px', width:'100px'}} onClick={this.showImage}/>
  
  
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" style={{height:'100px', width:'100px'}} onClick={this.showImage}/>
  
  
    <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Donald_duck_debut.PNG" style={{height:'100px', width:'100px'}} onClick={this.showImage}/>
 </div> 
  
</div>
<div className="show" style={{display:this.state.show}}>
  <span className="closebtn" onClick={this.closebutton}>&times;</span>
  <img id="expandedImg" style={{width:'100%'}}/>
  <div id="imgtext"></div>
</div>
</div> );
    }
}
export default Images;
