import React, { Component } from 'react';
import './Commentaire.css';

class Commentaire extends Component {

 
  componentDidMount(){
  
  }


  render() {

    return (
        <li class="blockquote text-left">
            <p class="mb-0 p-2 commentaire">{"\""+this.props.text+"\""}</p>
                
                <footer class="blockquote-footer p-1">en {"" +this.props.date}, Dit Mr   
                        <cite title={this.props.personne}>{" "+this.props.personne}</cite>
                        
                </footer>    
        </li>
        
    )};
}

export default Commentaire;
