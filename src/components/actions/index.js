import axios from "axios";
let client = axios.create();

const getQuestionAction = (question) => ({
  type: "GET_QUESTION",
  question: question.data[0],
});

export const answeredQuestion = (question, prevScore, newScore) => (
  dispatach
) =>
  dispatach({
    type: "ANSWERED_QUESTIONS",
    question,
    prevScore,
    newScore,
  });



export const getQuestion = () => (dispatach) => {
  client
    .get("http://jservice.io/api/random")
    .then((res) => {
      dispatach(getQuestionAction(res));
    })
    .catch((err) => {
      throw new err();
    });
};
