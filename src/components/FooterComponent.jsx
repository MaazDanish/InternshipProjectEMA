import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
           
        }
    }
  render() {
    return (
      <div>
        <footer className = "footer">
                    <span>Developed By <a href="https://github.com/MaazDanish" target='_blank'> Maaz </a> Danish</span>
                    <span className="right">Guide - Bheemesh Bhupendra & Anisha Das </span>
                    <span className='left'>Project @t Skill Lync</span>
                </footer>
      </div>
    )
  }
}
