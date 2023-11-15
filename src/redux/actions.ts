export const INCREMENT = "INCREMENT";
export const SET_USERNAME = "SET_USERNAME";
export const COMPLETE_QUIZ = "COMPLETE_QUIZ";

export const increment = () => ({
  type: INCREMENT,
});

export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: { username },
});

export const completeQuiz = (quizName: string) => ({
  type: COMPLETE_QUIZ,
  payload: { quizName },
});
