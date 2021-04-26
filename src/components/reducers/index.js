export const defaultState = {
  question: "",
  score: 0,
  category: "",
  pointValue: 0,
  solution: "",
  answeredQuestions: [],
};
export const jeopardy = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_QUESTION":
      const newQuestion = {
        question: action.question.question,
        pointValue: action.question.value,
        solution: action.question.answer,
        category:
          (action.question.category && action.question.category.title) || "",
      };
      return Object.assign({}, state, newQuestion);

    case "ANSWERED_QUESTIONS":
      const answeredQuestionsState = {
        question: action.question.question,
        pointValue: action.question.pointValue,
        category: action.question.category,
        solution: action.question.solution,
        previouseScore: action.prevScore,
        newScore: action.newScore,
      };

      state.answeredQuestions.push(answeredQuestionsState);
      return Object.assign({}, state);

    default:
      return state;
  }
};
