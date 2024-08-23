import PropTypes from 'prop-types';

const Header = (props) => {
    return (
      <h1>{props.text}</h1>
    )
  }
  
  Header.propTypes = {
    text: PropTypes.string
  }

export default Header