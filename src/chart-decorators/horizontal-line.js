import React from 'react'
import { Svg } from 'expo'

class HorizontalLine extends React.Component {

    render() {
        const { y, value, ...other } = this.props
        return (
            <Svg.Line
                x1={ '0%' }
                x2={ '100%' }
                y1={ y(value) }
                y2={ y(value) }
                { ...other }
            />
        )
    }
}

HorizontalLine.defaultProps = {
    stroke: 'black',
}

export default HorizontalLine
