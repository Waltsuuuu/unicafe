import PropTypes from 'prop-types'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad, allFeedback, average, positivePercentage }) => {
    return (
    <table>
        <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={allFeedback} />
            <StatisticLine text="avg" value={average} />
            <StatisticLine text="positive" value={positivePercentage + '%'} />  
        </tbody>
    </table>
    )     
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    allFeedback: PropTypes.number,
    positivePercentage: PropTypes.number,
    average: PropTypes.number,
}
export default Statistics