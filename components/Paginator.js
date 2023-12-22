import { View, Text, useWindowDimensions, Animated } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'

const Paginator = ({data, scrollX}) => {
    const {width} = useWindowDimensions();

  return (
    <View style={{flexDirection: 'row', height: 64, justifyContent: 'center', alignItems: 'center'}}>
      {
        data.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [8, 16, 8],
                extrapolate: 'clamp'
            })
          return (
            <Animated.View key={i} style={{width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.gray, margin: 4}} />
          )
        })
      }
    </View>
  )
}

export default Paginator