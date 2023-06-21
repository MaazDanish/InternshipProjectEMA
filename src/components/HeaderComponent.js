import React, { Component } from 'react';
import logo from "../images/logo.png";


export default class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
  render() {
    return (
      <div>
         <header className = "header">
                    <nav>
                       <div><a href="home" className="navbar-brand">Employee Management Application</a></div>
                    </nav>
                </header>
      </div>
    )
  }
}
