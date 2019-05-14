import React from 'react'
import { AreaChart } from 'react-native-svg-charts'
import { Svg } from 'expo'

class GradientExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const Gradient = ({ index }) => (
            <Svg.Defs key={ index }>
                <Svg.LinearGradient id={ 'gradient' } x1={ '0%' } y={ '0%' } x2={ '0%' } y2={ '100%' }>
                    <Svg.Stop offset={ '0%' } stopColor={ 'rgb(134, 65, 244)' } stopOpacity={ 0.8 }/>
                    <Svg.Stop offset={ '100%' } stopColor={ 'rgb(134, 65, 244)' } stopOpacity={ 0.2 }/>
                </Svg.LinearGradient>
            </Svg.Defs>
        )

        return (
            <AreaChart
                style={{ height: 200 }}
                data={ data }
                contentInset={{ top: 20, bottom: 20 }}
                svg={{ fill: 'url(#gradient)' }}
            >
                <Gradient/>
            </AreaChart>
        )
    }

}

export default GradientExample
