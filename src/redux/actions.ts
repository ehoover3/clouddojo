// actions.ts
export const INCREMENT = "INCREMENT";
export const SET_USERNAME = "SET_USERNAME";

export const increment = () => ({
  type: INCREMENT,
});

export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: { username },
});
