export const generateBoard = (payload) => {
  return function (dispatch) {
    dispatch(loading())
    dispatch(generate_board())
  }
}

export const generate_board = (payload) => {
  return {
    type: 'LOAD_BOARD'
  }
}

export const loading = () => {
  return {
    type: 'ON_LOAD_DATA'
  }
}
