import PropTypes from 'prop-types'
import React from 'react'
import { Svg } from 'expo'

const Tooltip = ({ x, y, value, index, height, text, stroke, pointStroke }) => {
    return (
        <Svg.G>
            <Svg.Line
                x1={ x(index) }
                y1={ height }
                x2={ x(index) }
                y2={ 20 }
                stroke={ stroke }
            />
            <Svg.Circle
                cx={ x(index) }
                cy={ y(value) }
                r={ 4 }
                stroke={ pointStroke }
                strokeWidth={ 2 }
                fill={ 'white' }
            />
            <Svg.G x={ x(index) < 40 ? 40 : x(index) } y={ 10 }>
                <Svg.Rect
                    x={ -40 }
                    y={ 1 }
                    width={ 80 }
                    height={ 20 }
                    fill={ 'rgba(0, 0, 0, 0.2)' }
                    rx={ 2 }
                    ry={ 2 }
                />
                <Svg.Rect
                    x={ -40 }
                    y={ 0 }
                    width={ 80 }
                    height={ 20 }
                    fill={ 'white' }
                    rx={ 2 }
                    ry={ 2 }
                />
                <Svg.Text
                    fontSize="12"
                    textAnchor="middle"
                >
                    { text }
                </Svg.Text>
            </Svg.G>
        </Svg.G>
    )
}

Tooltip.propTypes = {
    x: PropTypes.func.isRequired,
    y: PropTypes.func.isRequired,
    value: PropTypes.number,
    index: PropTypes.number,
    height: PropTypes.number,
    stroke: PropTypes.string,
    pointStroke: PropTypes.string,
    text: PropTypes.string,
}

export default Tooltip
