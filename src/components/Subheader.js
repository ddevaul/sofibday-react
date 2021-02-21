import React from "react";
import Button from "react-bootstrap/Button"
export default class Subheader extends React.Component {
  render() {
    return (<div className="subheader">
       <Button onClick={this.props.showImages} variant="light">Pictures</Button>  
       <Button onClick={this.props.showFacts} variant="light">Funfacts</Button>
    </div>) 
  }
}