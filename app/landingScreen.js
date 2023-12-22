import { View, Text, SafeAreaView, Dimensions, FlatList, Image, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Stack, router } from 'expo-router'
import { COLORS, FONT, SIZES } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/ui/button'
import tw from 'tailwind-react-native-classnames'
import carouselData from '../constants/carouselData'
import CarouselItem from '../components/carouselItem'
import Paginator from '../components/Paginator'

const landingScreen = () => {
    const carouselsData = [
        {
            id: '1',
            title: 'Title 1',
            description: 'Description 1',
            image: require('../assets/images/Carousel3.png')
        },
        {
            id: '2',
            title: 'Title 2',
            description: 'Description 2',
            image: require('../assets/images/Carousel3.png')
        },
        {
            id: '3',
            title: 'Title 3',
            description: 'Description 3',
            image: require('../assets/images/Carousel3.png')
        },
    ]
    const slidesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;



    // useEffect(() => {
    //     //add timer based auto slide
    //     const timer = setInterval(() => {

    //         for (let i = 0; i < carouselsData.length; i++) {
    //             if (currentIndex < carouselsData.length - 1) {
    //                 currentIndex === i && slidesRef.current.scrollToIndex({index: i + 1})
    //             } else {
    //                 slidesRef.current.scrollToIndex({index: 0})
    //             }
    //         }
    //     }, 3000);

    //     //clear timer on unmount
    //     return () => clearInterval(timer);
    // }, []);


    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;





    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    useEffect(() => {
        let timer;

        const startAutoScroll = () => {
            timer = setInterval(() => {
                if (currentIndex < carouselsData.length - 1) {
                    slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
                } else {
                    slidesRef.current.scrollToIndex({ index: 0 });
                }
            }, 3000); //change it to 3000 for 3 sec and so on
        };

        const stopAutoScroll = () => {
            clearInterval(timer);
        };

        
        startAutoScroll();

        
        return () => {
            stopAutoScroll();
        };
    }, [currentIndex]);
    
    return (
        <View>

            <Stack.Screen options={
                {
                    headerShown: false,
                }
            } />
            <View>
                <View
                    style={{
                        backgroundColor: COLORS.lightWhite,
                        height: '70%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <View
                        style={{

                            flex: 3,
                            // margin: SIZES.medium

                        }}
                    >


                        <FlatList
                            data={carouselData}
                            renderItem={({ item }) => <CarouselItem item={item} />}
                            bounces={false}
                            keyExtractor={(item) => item.id}
                            horizontal
                            pagingEnabled
                            scrollEnabled
                            scrollEventThrottle={32}
                            viewabilityConfig={viewConfig}
                            onViewableItemsChanged={viewableItemsChanged}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: false }
                            )}
                            ref={slidesRef}
                            showsHorizontalScrollIndicator={false} />
                    </View>
                    <Paginator data={carouselData} scrollX={scrollX} />
                </View>
                <View
                    style={{
                        backgroundColor: COLORS.primary,
                        // height: Dimensions.get('window').height / 3,
                        height: '30%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',

                    }}
                >
                    <View style={{ margin: SIZES.medium }}>

                        <Button onPress={() => router.push('login-screen')} variant="default">Login</Button>
                        <Button onPress={() => router.push('register-screen')} variant="secondary">Register</Button>
                    </View>
                </View>
            </View>


            <StatusBar style="dark" />
        </View>
    )
}

export default landingScreen