import React from "react"
import image from "../pictures/shoes/jordans/OIP2.jpg"
import { Button } from "react-bootstrap"






export default function Header(){
   
    return(
    <div className="head">
    
    <div className="headerimage">
    
    <img className="advimg" src={image} width="30%"  />
    <p className="nikes" >Nike JORDAN</p>
    <div className="btn1">
    <Button variant="light">SHOP MEN</Button>
    </div>
    <div className="btn2">
    <Button className="bbtn2" variant="light">SHOP WOMEN</Button>
    </div>
     </div>
     <h1>YOUR ONE STOP SHOP!</h1>
    </div>
    )
}

<div className="container">
    <div className="thecard">
    <div className="thefront"> </div>
    <div className="theback">  </div> 
    </div> </div> 