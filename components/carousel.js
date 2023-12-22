import React from 'react';
import { View, ScrollView, Dimensions, SafeAreaView, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS } from '../constants/theme';
import PagerView from 'react-native-pager-view';

const Carousel = ({ children,data , ...props }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
                return (
                    <View style={[tw`w-full`, { height: Dimensions.get('window').height / 3 }]}>
                        {item}
                    </View>
                );
            }}
            keyExtractor={(item) => item.id}
            
            {...props}
        />
    );
};

export default Carousel;
