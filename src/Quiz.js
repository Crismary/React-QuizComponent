import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

Class Quiz extends React.Component {
  constructor(props){
    super(props);

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


export default Quiz;
