import React, { Component } from 'react';
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import prompts from './prompts';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
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
        code: prompts[newIndex].code,
        answers: prompts[newIndex].answers,
        correctAnswer: prompts[newIndex].correctAnswer,
        buttonColor: ['cyan','cyan','cyan','cyan'],
        question: "How should this be fixed?",
        countdown: 10,
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
        countdown: 3,
      });
    }
    else {
      this.setState( {
        question: "Nope!",
        buttonColor: colors,
        countdown: 3,
      });
    }
    if( this.state.promptIndex < prompts.length - 1 ) {
      setTimeout( () => { this.promptCountdown( 3 ) }, 1000 );
    }
  }

  renderButton( num ) {
    return <button className={"btn col m6 " + this.state.buttonColor[num]}
      onClick={() => this.answerClicked(num)}>{this.state.answers[num]}</button>
  }

  renderButtons() {
    return [0, 1, 2, 3].map( (btn, index) => { return this.renderButton(index) } );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Rhiannon        
        </header>
        <div className="container code">
          <SyntaxHighlighter language='javascript' style={irBlack}>{this.state.code}</SyntaxHighlighter>
        </div>
        <footer className="container">
          <div className="row">
            <div className="col m12 question">
              {this.state.question}
            </div>
          </div>
          <div className="row">
            {this.renderButtons()}
          </div>
        </footer>
        <div className="score">
          <span className="correct">{this.state.numCorrect}</span> /&nbsp;
          {prompts.length}&nbsp;
          <span className="percentCorrect">
            ({parseInt(this.state.numCorrect / prompts.length * 100)}%)
          </span>
        </div>
        <div className="countdown">
          {this.state.countdown}
        </div>
      </div>
    );
  }
}

export default App;
