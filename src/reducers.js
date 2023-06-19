const initialState = {
    username: '',
    password: ''
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_CREDENTIALS':
        // Сохранение данных в localStorage
        localStorage.setItem('username', action.payload.username);
        localStorage.setItem('password', action.payload.password);

        return {
          ...state,
          username: action.payload.username,
          password: action.payload.password
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  