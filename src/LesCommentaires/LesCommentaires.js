import React, { Component } from 'react';
import './LesCommentaires.css';
import '../Commentaire/Commentaire'
import Commentaire from '../Commentaire/Commentaire';

class LesCommentaires extends Component {

  

  componentDidMount(){
  
  }
  render() {
      return (
        <div class="collapse" id={this.props.divName} >
            <Commentaire />
        </div>
      )}
}

export default LesCommentaires;
