import React, { Component } from 'react';
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import prompts from './prompts';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      screenshot: '',
      promptIndex: 0,
      prompt: {},
      answers: [],
      buttonColor: ['cyan','cyan','cyan','cyan'],
      correctAnswer: 0,
      question: "",
      code: "",
      countdown: 0,
      numCorrect: 0,
      numTried: 0,
    }
    this.setPrompt = this.setPrompt.bind( this );
    this.nextPrompt = this.nextPrompt.bind( this );
    this.answerClicked = this.answerClicked.bind( this );
  }

  componentDidMount() {
    this.setPrompt( 0 );
  }

  setPrompt( newIndex ) {
    if( newIndex >= 0  &&  newIndex < prompts.length ) {
      this.setState( {
        promptIndex: newIndex,
        screenshot: 'images/screenshots/' + prompts[newIndex].image,
        code: prompts[newIndex].code,
        answers: prompts[newIndex].answers,
        correctAnswer: prompts[newIndex].correctAnswer,
        buttonColor: ['cyan','cyan','cyan','cyan'],
        question: "What's wrong here?",
      });
    }
  }

  getColors( playerAnswer, correctAnswer ) {
    let colors = [];
    for( let i = 0; i < 4; i++ ) {
      if( i === correctAnswer ) {
        colors.push( 'green' );
      }
      else if( i === playerAnswer ) {
        colors.push( 'cyan' );
      }
      else {
        colors.push( 'grey' );
      }
    }
    return colors;
  }

  promptCountdown( countdown ) {
    if( countdown <= 1 ) {
      this.nextPrompt();
    }
    else {
      this.setState( { countdown: this.state.countdown - 1 } );
      setTimeout( () => { this.promptCountdown( countdown - 1 ) }, 1000 );
    }
  }

  nextPrompt() {
    if( this.state.promptIndex < prompts.length - 1 ) {
      this.setPrompt( this.state.promptIndex + 1 );
    }
  }

  answerClicked( answer ) {
    let colors = this.getColors( answer, this.state.correctAnswer );
    if( answer === this.state.correctAnswer ) {
      this.setState( {
        question: "That's right!",
        numCorrect: this.state.numCorrect + 1,
        buttonColor: colors,
      });
    }
    else {
      this.setState( {
        question: "Nope!",
        buttonColor: colors,
      });
    }
    if( this.state.promptIndex < prompts.length - 1 ) {
      this.setState( { countdown: 3 } );
      setTimeout( () => { this.promptCountdown( 3 ) }, 1000 );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Rhiannon        
        </header>
        {/* <img alt="screenshot" src={this.state.screenshot} className="screenshot" /> */}
        <div className="container code">
          <SyntaxHighlighter language='javascript' style={dark}>{this.state.code}</SyntaxHighlighter>
        </div>
        <footer className="container">
          <div className="row">
            <div className="col m12 question">
              {this.state.question}
            </div>
          </div>
          <div className="row">
            <button className={"btn col m6 " + this.state.buttonColor[0]} onClick={() => this.answerClicked(0)}>{this.state.answers[0]}</button>
            <button className={"btn col m6 " + this.state.buttonColor[1]} onClick={() => this.answerClicked(1)}>{this.state.answers[1]}</button>
            <button className={"btn col m6 " + this.state.buttonColor[2]} onClick={() => this.answerClicked(2)}>{this.state.answers[2]}</button>
            <button className={"btn col m6 " + this.state.buttonColor[3]} onClick={() => this.answerClicked(3)}>{this.state.answers[3]}</button>
          </div>
        </footer>
        <div className="score">
          <span className="correct">{this.state.numCorrect}</span> / {prompts.length} <span className="percentCorrect">({parseInt(this.state.numCorrect / prompts.length * 100)}%)</span>
        </div>
        <div className="countdown">
          {this.state.countdown}
        </div>
      </div>
    );
  }
}

export default App;
