import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

Class Quiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {quiz.position: 1}
  }
  render(){
    return(
      <div>
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
      </div>
    )
  }
}

export default Quiz