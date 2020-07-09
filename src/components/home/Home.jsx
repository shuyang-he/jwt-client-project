import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './Home.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.logout = this.logout.bind(this)
  }

  async logout () {
    try {
      const resJson = await fetch('/api/users/logout')
      const res = await resJson.json()
      this.props.checkLogout(res.logout)
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const logout = this.props.loginStatus
      ? <button className={styles.home_navi_logout} onClick={this.logout}>Logout</button> : null
    return (
      <>
        <div className={styles.home_navi}>
          <NavLink className={styles.home_navi_links} to="/">Home</NavLink>
          <NavLink className={styles.home_navi_links} to="/register">Register</NavLink>
          <NavLink className={styles.home_navi_links} to="/login">Login</NavLink>
          {logout}
        </div>
      </>
    )
  }
}

Home.propTypes = {
  loginStatus: PropTypes.bool,
  checkLogout: PropTypes.func
}

export default Home
