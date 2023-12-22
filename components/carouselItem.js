import { View, Text,Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '../constants/theme';
import tw from 'tailwind-react-native-classnames';

const CarouselItem = ({item}) => {
    const {width} = useWindowDimensions();


    console.log(item)

  return (
    <View style={{width,  justifyContent: 'center', flex:1, alignItems: 'center'}}>
      <View style={{flex:0.6, }}>

      <Image source={item.image} style={[width - 50, {flex:0.9,  objectFit: 'contain', resizeMode: 'contain'},]} />
      </View>
      <Text
      numberOfLines={2}
      style={[tw`mx-4 px-6`,{fontSize: SIZES.xxLarge, fontFamily: FONT.extraBold, textAlign: 'center', color: COLORS.primary}]}
      >{item.title}</Text>
      <Text style={[tw`mx-6 mt-1`,{fontSize:SIZES.medium, color: COLORS.gray, textAlign:'center'}]} >{item.description}</Text>
 
    </View>
  )
}

export default CarouselItem