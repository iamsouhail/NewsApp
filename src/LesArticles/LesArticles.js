import React, { Component } from 'react';
import './LesArticles.css';
import Article from "./../Article/Article"
class LesArticles extends Component {
  constructor(props){
    super(props);
    this.state = {"articles" : []};

  }
  render() {

    const text = "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent,porteur de sens et utilisant les structures propres à une langue. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonne tou le haïku.";
    this.arr = [];
    for(var i=0;i<100;i++){
      const name = "Article "+i;
      this.arr.push(
      <div class="row top-buffer">  
        <div class="col">
          <Article id={i} photo="https://beninwebtv.com/wp-content/uploads/2018/08/cristiano-ronaldo.jpg" 
                          titre={name}
                          description={text}/>
        </div>
      </div> );
    }
      return (
    <div name="LesArticles" class="container">
      {this.arr}
      
    </div>
      )}
}

export default LesArticles;
