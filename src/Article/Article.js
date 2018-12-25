import React, { Component } from 'react';
import './Article.css';
import Button from '@material-ui/core/Button';
class Article extends Component {

  constructor(props){
    super(props);
    this.id = this.props.id;

  }

  componentDidMount(){
    window.$('[data-toggle="popover"]').popover();
  }
  say(val){
     // alert("hello "+val);
  }
  render() {
      this.val1 = "tu as liker";
      return (
    
    <div name={this.props.id} class="card"  >
        
        <h2 class="card-title">Article {this.props.id}</h2>
       <div class="card-body"> 
            <p class="card-text">Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent,
             porteur de sens et utilisant les structures propres à une langue. 
            Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet
             ou le haïku.</p>
        </div>
        <div class="card-body">
        <Button class="btn btn-primary"   
            data-container="body" data-toggle="popover" data-placement="top" data-content={this.val1}
        >
            Like
        </Button>
        <Button class="btn btn-secondary" 
            data-container="body" data-toggle="popover" data-placement="top" data-content={this.val1} >
            Normal
        </Button>
        <Button type="button" class="btn btn-warning" 
             data-container="body" data-toggle="popover" data-placement="top" data-content={this.val1}>
            Dislike
        </Button>
        </div>
    </div>
      )}
}

export default Article;
