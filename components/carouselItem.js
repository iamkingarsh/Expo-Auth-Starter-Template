import { View, Text,Image, useWindowDimensions } from 'react-native'
import React from 'react'

const carouselItem = () => {
    const {width} = useWindowDimensions();

  return (
    <View style={{width, height: 100}}>
      <Text>carouselItem</Text>
    </View>
  )
}

export default carouselItem