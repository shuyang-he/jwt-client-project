const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

const logoutFailure = () => {
  return {
    type: 'LOGOUT_FAILURE'
  }
}

export const checkLogout = (logout, dispatch) => {
  if (logout) {
    dispatch(logoutSuccess())
  } else {
    dispatch(logoutFailure())
  }
}
