// reducers.ts
import { combineReducers } from "redux";

const counterReducer = (state = { count: 0, username: "", completedQuizzes: {} }, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_USERNAME":
      return { ...state, username: action.payload.username };
    case "COMPLETE_QUIZ":
      return { ...state, completedQuizzes: { ...state.completedQuizzes, [action.payload.quizName]: true } };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers as needed
});

export default rootReducer;
