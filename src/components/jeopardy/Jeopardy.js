import React, { Component } from "react";
import GameBoard from "./Gameboard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as JeopardyAction from "../actions";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      score: 0,
      oldScore: 0,
      skip: true,
    };
  }

  componentDidMount() {
    this.props.getQuestion();
  }
  //change the state here for downward child to send as prop
  checkAnswer = (answer) => {
    this.setState({ skip: false });
    let updatedScore = this.state.score;
    let _oldScore = this.state.score;

    if (answer && answer.toUpperCase() === this.props.solution.toUpperCase()) {
      updatedScore += this.props.pointValue;
    } else {
      updatedScore -= this.props.pointValue;
    }
    this.props.answeredQuestion(this.props, this.state.score, updatedScore);
    this.setState({ score: updatedScore, answer: answer });
    this.props.getQuestion();
    this.setState({ oldScore: _oldScore });
  };
  handleSkipQuestion = () => {
    this.props.getQuestion();
    this.setState({ answer: "", skip: true });
  };
  //display the results on the screen
  render() {
    return (
      <div>
        <GameBoard
          question={this.props.question}
          category={this.props.category}
          pv={this.props.pointValue}
          score={this.state.score}
          oldScore={this.state.oldScore}
          checkAnswer={this.checkAnswer}
        />
        <button style={{ marginTop: "5px" }} onClick={this.handleSkipQuestion}>
          Skip question
        </button>
        <span className="qAns">Actul answer: </span>
        {!this.state.skip && this.props.solution}
        <span className="qAns">Your submited answer: </span>
        {this.state.answer}

        <h2>List of answerd Question</h2>
        <div className="ansQuestions">
          <ol>
            {this.props.answeredQuestions.map((questions, index) => {
              return <li key={index}>{questions.question}</li>;
            })}
          </ol>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  question: state.question,
  score: state.score,
  category: state.category,
  pointValue: state.pointValue,
  solution: state.solution,
  answeredQuestions: state.answeredQuestions,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(JeopardyAction, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Jeopardy);
