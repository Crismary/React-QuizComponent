import React, { Component } from 'react'
import React from 'react';


let quizData = require('./quiz_data.json')

Class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {quiz_position: 1};
  }

  render() {
    return(
      <div>
        <div className="QuizQuestion">

        </div>
      </div>
    );
  }
}


export Default Quiz;
