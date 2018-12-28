import React, { Component } from 'react';
import './LesCommentaires.css';
import '../Commentaire/Commentaire'
import Commentaire from '../Commentaire/Commentaire';

class LesCommentaires extends Component {

  

  componentDidMount(){
  
  }
  render() {
    this.v = [];
    for(var i=0;i<3;i++){
      this.v.push(
        <Commentaire 
              text="He’s has been repeating it for 10 years. Many compare him to (Diego) Maradona or (Johan) Cruyff, but it seems obvious to me that Messi is the best in history." 
              personne="Mostovoi"
              date=" December 22, 2018"
              />
      );
    }

      return (
        <div class="collapse  text-dark lescommentaires" id={this.props.divName} >
          <ul class="list-unstyled">
            {this.v}
          </ul>          
        </div>
      )}
}

export default LesCommentaires;
