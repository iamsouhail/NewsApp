import React, { Component } from 'react';
import './Article.css';
import Button from '@material-ui/core/Button';
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
            <p class="card-text">{this.props.description}</p>
        </div>
        <div class="card-body">
        <Button class="btn btn-primary"   >
            Lire la suite
        </Button>
        <Button class="btn btn-success" >
            Commentaires
        </Button>
        </div>
    </div>
      )}
}

export default Article;
