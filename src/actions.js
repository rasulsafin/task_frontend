export const setUserCredentials = (username, password) => {
    return {
      type: 'SET_USER_CREDENTIALS',
      payload: {
        username,
        password
      }
    };
  };