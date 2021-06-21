import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { connect } from '../../store/index'
import { logout } from '../../actions/auth'

const Header = ({ logout, auth: { isAuthenticated, user } }) => {
  
  const onLogout = (e) => {
    e.preventDefault()
    logout()
  }
  let links
  if (isAuthenticated) {
    links = (
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          href="#"
          role="button"
          onClick={() => setIsExpanded(prev => !prev)}
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-user"></i>
          Account
        </a>
        {isExpanded ? (
          <div aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={'/user/' + user.id}>
              My Profile
            </Link>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" onClick={onLogout}>
              Log Out
            </a>
          </div>
        ) : null}
      </li>
    );
  
  } else {
    links = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
          <div class="fa-stack">
   <i class="fa fa-sign-in fa-reverse fa-stack-1x"></i>
   <i class="fa fa-circle-o fa-stack-2x"></i>
  </div>
            Log In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
          <div class="fa-stack">
   <i class="fa fa-user-plus fa-reverse fa-stack-1x"></i>
   <i class="fa fa-circle-o fa-stack-2x"></i>
  </div>
            Register
          </Link>
        </li>
      </React.Fragment>
    )
  }
  return (
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-info bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
              <div class="fa-stack">
                   <i class="fa fa-globe fa-reverse fa-stack-1x"></i>
                  <i class="fa fa-circle-o fa-stack-2x" ></i>
                  </div>
                All Posts
              </Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/feed">
                  <i className="fa fa-rss"></i>
                  Feed
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            {links}
          </ul>
          </div>
        </div>
    </nav>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, { logout })(Header)
