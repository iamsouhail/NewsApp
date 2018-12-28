import React, { Component } from 'react';
import './Article.css';
import '../LesCommentaires/LesCommentaires'
import LesCommentaires from '../LesCommentaires/LesCommentaires';
class Article extends Component {

  constructor(props){
    super(props);
    this.id = this.props.id;

  }

  componentDidMount(){
  
  }
  say(val){
     // alert("hello "+val);
  }
  render() {
      return (
    
    <div name={this.props.id} class="card"  >
        
        <h1 class="card-title">{this.props.titre}</h1>
        <img src={this.props.photo} class="card-img-top" alt="..."   />
       <div class="card-body "> 
            <p class="card-text lead">{this.props.description}</p>
        </div>
        <div class="card-body">
        <button class="btn btn-primary" >
            Lire la suite
        </button>
        <button class="btn btn-success" data-toggle="collapse" href={"#mycomm-"+this.props.id} >
            Commentaires
        </button>
        </div>
        <LesCommentaires divName={"mycomm-"+this.props.id} />
    </div>
      )}
}

export default Article;
