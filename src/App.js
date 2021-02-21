import logo from './logo.svg';
import './App.css';
import CarouselFilled from "./components/Carousel"
import Header from "./components/Header"
import Subheader from "./components/Subheader"
import Funfacts from "./components/Funfacts"

import React from "react"

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showPictures: true,
    };
  }
  
  showFacts = () => {
    this.setState( {
      showPictures: false,
    })
  }

  showImages = () => {
    this.setState( {
      showPictures: true,
    })
  }

  render () {

    return (
    <div className="App">
      <Header></Header>
      <Subheader showImages={this.showImages} showFacts={this.showFacts}></Subheader>
      {this.state.showPictures ? <CarouselFilled className="carousel"></CarouselFilled> : <Funfacts></Funfacts>}
    </div>
  );
  }
}

