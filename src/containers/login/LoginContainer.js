import { connect } from 'react-redux'
import { checkLoginStatus } from '../../actions/LoginActions'
import Login from '../../components/login/Login'

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkLoginStatus: (exist, valid) => { checkLoginStatus(exist, valid, dispatch) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
