import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Svg } from 'expo'

class ExtrasExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        /**
         * Both below functions should preferably be their own React Components
         */

        const HorizontalLine = (({ y }) => (
            <Svg.Line
                key={ 'zero-axis' }
                x1={ '0%' }
                x2={ '100%' }
                y1={ y(50) }
                y2={ y(50) }
                stroke={ 'grey' }
                strokeDasharray={ [ 4, 8 ] }
                strokeWidth={ 2 }
            />
        ))

        const Tooltip = ({ x, y }) => (
            <Svg.G
                x={ x(5) - (75 / 2) }
                key={ 'tooltip' }
                onPress={ () => console.log('tooltip clicked') }
            >
                <Svg.G y={ 50 }>
                    <Svg.Rect
                        height={ 40 }
                        width={ 75 }
                        stroke={ 'grey' }
                        fill={ 'white' }
                        ry={ 10 }
                        rx={ 10 }
                    />
                    <Svg.Text
                        x={ 75 / 2 }
                        dy={ 20 }
                        alignmentBaseline={ 'middle' }
                        textAnchor={ 'middle' }
                        stroke={ 'rgb(134, 65, 244)' }
                    >
                        { `${data[5]}ºC` }
                    </Svg.Text>
                </Svg.G>
                <Svg.G x={ 75 / 2 }>
                    <Svg.Line
                        y1={ 50 + 40 }
                        y2={ y(data[ 5 ]) }
                        stroke={ 'grey' }
                        strokeWidth={ 2 }
                    />
                    <Svg.Circle
                        cy={ y(data[ 5 ]) }
                        r={ 6 }
                        stroke={ 'rgb(134, 65, 244)' }
                        strokeWidth={ 2 }
                        fill={ 'white' }
                    />
                </Svg.G>
            </Svg.G>
        )

        return (
            <LineChart
                style={{ height: 200 }}
                data={ data }
                svg={{
                    stroke: 'rgb(134, 65, 244)',
                    strokeWidth: 2,
                }}
                contentInset={{ top: 20, bottom: 20 }}
                curve={ shape.curveLinear }
            >
                <Grid/>
                <HorizontalLine/>
                <Tooltip/>
            </LineChart>
        )
    }

}

export default ExtrasExample
