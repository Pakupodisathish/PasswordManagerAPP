// PasswordManager Component

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    search: '',
    checked: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitingForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    if (website && username && password) {
      const newPasswordItem = {
        id: uuidv4(),
        website,
        username,
        password,
      }
      this.setState(prevState => ({
        passwordList: [...prevState.passwordList, newPasswordItem],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  onChangeSearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  onChecked = event => {
    this.setState({checked: event.target.checked})
  }

  onDeletePasswordItem = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachPasswordItem => eachPasswordItem.id !== id,
      ),
    }))
  }

  render() {
    const {passwordList} = this.state
    const {website} = this.state
    const {username} = this.state
    const {search} = this.state
    const {password} = this.state
    const {checked} = this.state

    const filteredpasswordList = passwordList.filter(eachPasswordItem =>
      eachPasswordItem.website.toLowerCase().includes(search.toLowerCase()),
    )

    const condition = filteredpasswordList.length !== 0

    return (
      <div className="password-manager-app">
        <div className="app-container">
          <div className="app-name-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              className="logo-img"
              alt="app logo"
            />
          </div>
          <div className="password-manager-form-image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
              className="form-image"
              alt="password manager"
            />
            <form
              className="form-card-container"
              onSubmit={this.onSubmitingForm}
            >
              <h1 className="form-name">Add New Password</h1>
              <div className="logo-form-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="input-logo"
                  alt="website"
                />
                <input
                  className="input-element"
                  placeholder="Enter Website"
                  type="text"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="logo-form-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="input-logo"
                  alt="username"
                />
                <input
                  className="input-element"
                  placeholder="Enter Username"
                  type="text"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="logo-form-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="input-logo"
                  alt="password"
                />
                <input
                  className="input-element"
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="your-passwords-container">
            <div className="nav-bar-container">
              <div className="your-passwords-count-container">
                <h1 className="your-passwords-heading">Your Passwords</h1>
                <p className="count">{passwordList.length}</p>
              </div>
              <div className="search-bar-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  className="search-img"
                  alt="search"
                />
                <input
                  type="search"
                  className="search-input"
                  value={search}
                  placeholder="Search"
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="togglepasswordShowing"
                onChange={this.onChecked}
                className="checkbox-input"
              />
              <label htmlFor="togglepasswordShowing" className="checkbox-label">
                Show Passwords
              </label>
            </div>
            {!condition ? (
              <div className="passwords-showing-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="no-passwords-img"
                  alt="no passwords"
                />
                <p className="no-passwords-text">No Passwords</p>
              </div>
            ) : (
              <ul className="password-items-container">
                {filteredpasswordList.map(eachPasswordItem => (
                  <PasswordItem
                    PasswordItemDetails={eachPasswordItem}
                    key={eachPasswordItem.id}
                    onDelete={this.onDeletePasswordItem}
                    isChecked={checked}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
