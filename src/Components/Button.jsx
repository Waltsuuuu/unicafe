import PropTypes from 'prop-types'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

Button.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string
}

export default Button