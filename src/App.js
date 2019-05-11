import React, { Component } from 'react';
import './App.css';

import prompts from './prompts';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      screenshot: '',
      promptIndex: 0,
      prompt: {},
      answers: [],
    }
    this.setPrompt = this.setPrompt.bind( this );
    this.answerClicked = this.answerClicked.bind( this );
  }

  componentDidMount() {
    this.setPrompt();
  }

  setPrompt() {
    if( this.state.promptIndex >= 0  &&  this.state.promptIndex < prompts.length ) {
      this.setState( {
        screenshot: '/images/screenshots/' + prompts[this.state.promptIndex].image,
        answers: prompts[this.state.promptIndex].answers,
      });
    }
  }

  answerClicked( answer ) {
    console.log( "Clicked on", answer );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Rhiannon        
        </header>
        <img alt="screenshot" src={this.state.screenshot} className="screenshot" />
        <footer>
          <button className="btn" onClick={() => this.answerClicked(0)}>{this.state.answers[0]}</button>
          <button className="btn" onClick={() => this.answerClicked(1)}>{this.state.answers[1]}</button>
          <button className="btn" onClick={() => this.answerClicked(2)}>{this.state.answers[2]}</button>
          <button className="btn" onClick={() => this.answerClicked(3)}>{this.state.answers[3]}</button>
        </footer>
      </div>
    );
  }
}

export default App;
