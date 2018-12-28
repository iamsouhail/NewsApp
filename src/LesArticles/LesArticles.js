import React, { Component } from 'react';
import './LesArticles.css';
import Article from "./../Article/Article"
class LesArticles extends Component {
  constructor(props){
    super(props);
    this.state = {"articles" : []};

  }
  render() {

    const text = "If there is one debate which doesn’t seem to end, and doesn’t look like ending anytime soon, it is who is the greatest of all time? While some fans argue over Lionel Messi and Cristiano Ronaldo, some like to roll back the years and fight over Pele and Diego Maradona. Following protocol, one particular Russian legend has also had his say on the matter.";
    this.arr = [];
    for(var i=0;i<100;i++){
      //const name = "Article "+i;
      this.arr.push(
      <div class="row top-buffer">  
        <div class="col">
          <Article id={i} photo="https://www.foxsportsasia.com/uploads/2018/09/lionel-messi720.jpg" 
                          titre="Russian football legend calls Lionel Messi greatest of all time, blasts Ballon d’Or"
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
