import './index.css'

const backgroundClassNameList = [
  'yellow',
  'green',
  'orange',
  'teal',
  'red',
  'cyan',
]

const PasswordItem = props => {
  const {PasswordItemDetails, onDelete, isChecked} = props
  const {id, website, username, password} = PasswordItemDetails

  const intitalBackgroundClassName = `profile ${
    backgroundClassNameList[
      Math.ceil(Math.random() * backgroundClassNameList.length - 1)
    ]
  }`

  const removePasswordItem = () => {
    onDelete(id)
  }
  return (
    <li className="passowrd-item-container">
      <div className="password-details">
        <p className={intitalBackgroundClassName}>
          {username[0].toUpperCase()}
        </p>
        <div className="name-password-container">
          <p>{website}</p>
          <p>{username}</p>
          {isChecked ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-img"
            />
          )}
        </div>
      </div>
      <button
        className="delete-btn-conatiner"
        type="button"
        onClick={removePasswordItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItem
