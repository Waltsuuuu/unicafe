import PropTypes from 'prop-types'


const StatisticLine = ({ text, value }) => {
    return (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
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