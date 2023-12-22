import { View, Text,Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '../constants/theme';

const CarouselItem = ({item}) => {
    const {width} = useWindowDimensions();


    console.log(item)

  return (
    <View style={{width,  justifyContent: 'center', flex:1, alignItems: 'center'}}>
      <View style={{flex:0.6}}>

      <Image source={item.image} style={[width - 50, {flex:0.7,  objectFit: 'contain', resizeMode: 'contain'},]} />
      </View>
      <Text
      style={{fontSize: SIZES.xxLarge, fontFamily: FONT.bold}}
      >{item.title}</Text>
      <Text style={{fontSize:SIZES.medium, color: COLORS.gray}} >{item.description}</Text>
 
    </View>
  )
}

export default CarouselItem