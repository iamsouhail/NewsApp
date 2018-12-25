import React, { Component } from 'react';
import './LesArticles.css';
import Article from "./../Article/Article"
class LesArticles extends Component {
  constructor(props){
    super(props);
    this.state = {"articles" : []};

  }
  render() {
      return (
    <div name="LesArticles" class="container">
        <Article id="465" />
        <Article id="468" />
        <Article id="467" />
    </div>
      )}
}

export default LesArticles;
