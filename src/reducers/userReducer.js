const initialState = {
    users: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  