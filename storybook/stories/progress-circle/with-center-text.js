import React from 'react'
import { Svg } from 'expo'
import { ProgressCircle } from 'react-native-svg-charts'

class ProgressCircleWithCenterTextExample extends React.PureComponent {

    render() {

        const TextGroup = () => (
            <Svg.G key="title">
                <Svg.Text
                    textAnchor="middle"
                    alignmentBaseline="text-bottom"
                    fontSize="20"
                    fontWeight="bold">
                    Title
                </Svg.Text>
                <Svg.Text
                    key="subtitle"
                    textAnchor="middle"
                    alignmentBaseline="text-top">
                    Subtitle
                </Svg.Text>
            </Svg.G>
        )

        return (
            <ProgressCircle
                style={{ height: 200 }}
                progress={ 0.7 }
                progressColor={ 'rgb(134, 65, 244)' }
            >
                <TextGroup/>
            </ProgressCircle>
        )
    }

}

export default ProgressCircleWithCenterTextExample
