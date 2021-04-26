import React from "react";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.checkAnswer(this.state.answer);

    this.setState({
      answer: "",
    });
  };
  render() {
    return (
      <div className="GameBoard">
        {" "}
        <h2>{this.props.category}</h2>
        <h3> ${this.props.pv}</h3>
        <div className="Clue">{this.props.question}</div>
        <div className="AnswerForm">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="answer"
              placeholder="answer"
              value={this.state.answer}
              onChange={this.handleChange}
            />
            <button>Submit Answer</button>
          </form>
        </div>
        <div className="Score">
          <strong>your New Score :</strong> {this.props.score}
        </div>
        <div className="Score">
          <strong>your previous Score :</strong> {this.props.oldScore}
        </div>
      </div>
    );
  }
}
export default GameBoard;
