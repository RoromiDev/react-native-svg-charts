import React from 'react'
import { Svg } from 'expo'
import { PieChart } from 'react-native-svg-charts'

class PieChartWithCenterTextExample extends React.PureComponent {

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

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

        return (
            <PieChart
                style={{ height: 200 }}
                data={ pieData }
            >
                <TextGroup/>
            </PieChart>
        )
    }

}

export default PieChartWithCenterTextExample
