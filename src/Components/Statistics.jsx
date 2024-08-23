import PropTypes from 'prop-types'

const Statistics = (props) => {
    return (
    <p>{props.label} {props.stats}</p>
    )
}

Statistics.propTypes = {
    label: PropTypes.string,
    stats: PropTypes.number
}
export default Statistics