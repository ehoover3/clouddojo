import { combineReducers } from "redux";
import { path_aws_cloudpractitioner } from "../data/Paths";

const counterReducer = (state = { count: 0, username: "", completedQuizzes: path_aws_cloudpractitioner }, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_USERNAME":
      return { ...state, username: action.payload.username };
    case "COMPLETE_QUIZ":
      const quizName = action.payload.quizName;
      const updatedQuizzes = state.completedQuizzes.map((quiz: any) => {
        if (quiz.full_url === quizName) {
          return { ...quiz, isComplete: true };
        }
        return quiz;
      });
      return { ...state, completedQuizzes: updatedQuizzes };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
