const authState = {
  login: {},
  layout: false,
  userProfile: null,
  isAuth: window.localStorage.getItem('token')
};

export default authState;