import actions from "./constants";

const login = (payload: any) => {
  return {
    type: actions.USER,
    payload: payload,
  };
};

const layout = (payload: any) => {
  return {
    type: actions.LAYOUT,
    payload: payload,
  };
};


export { login, layout };