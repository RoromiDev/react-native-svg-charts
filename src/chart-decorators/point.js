import PropTypes from 'prop-types'
import React from 'react'
import { Svg } from 'expo'

const Point = ({ x, y, value, index, radius, color }) => {
    if (isNaN(value)) {
        return <Svg.Circle/>
    }

    return (
        <Svg.Circle
            cx={ x(index) }
            cy={ y(value) }
            r={ radius }
            stroke={ color }
            fill={ 'white' }
        />
    )
}

Point.propTypes = {
    x: PropTypes.func.isRequired,
    y: PropTypes.func.isRequired,
    value: PropTypes.number,
    radius: PropTypes.number,
    index: PropTypes.number,
    color: PropTypes.string,
}

Point.defaultProps = {
    radius: 4,
    color: 'black',
}

export default Point
