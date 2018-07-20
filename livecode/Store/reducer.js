const initialState = {
  board: [
    ['1','0','1'],
    ['0','0','0'],
    ['0','0','0']],
  winner: '',
  loading: false
}

const reducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'LOAD_BOARD':
      return {
        ...state,
        board: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default reducers
