import PropTypes from 'prop-types'


const StatisticLine = ({ text, value }) => {
    return (
      <div>
        <strong>{text}</strong>:{value}
      </div>
    )
  }


  StatisticLine.propTypes = {
    text: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]).isRequired,  
    }






export default StatisticLine