import Home from '../../components/home/Home'
import { connect } from 'react-redux'
import { checkLogout } from '../../actions/LogoutActions'

const mapStateToProps = (state, props) => {
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    checkLogout: (logout) => { checkLogout(logout, dispatch) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
