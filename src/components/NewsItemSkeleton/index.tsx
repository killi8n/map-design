import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import { Wrapper, GradientItem, BigWrapper } from './styled';

let timeoutId: ReturnType<typeof setTimeout> | null = null

const NewsItemSkeleton = () => {
    const [shouldStartAnimation, setShouldStartAnimation] = useState<boolean>(true)
    const [wrapperWidth, setWrapperWidth] = useState<number>(0)
    const gradientItemLeftValue = new Animated.Value(0)
    useEffect(() => {
        if (wrapperWidth > 0 && shouldStartAnimation) {
            Animated.timing(gradientItemLeftValue, {
                toValue: wrapperWidth,
                duration: 10,
                useNativeDriver: false
            }).start(() => {
                setShouldStartAnimation(false)
                if (timeoutId) {
                    clearTimeout(timeoutId)
                }
                timeoutId = setTimeout(() => {
                    setShouldStartAnimation(true)
                }, 500)
            })
        }

    }, [wrapperWidth, shouldStartAnimation, setShouldStartAnimation, gradientItemLeftValue])

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [])
    return (
        <BigWrapper>
            <View style={{ zIndex: 150, height: 50, backgroundColor: 'white', width: 15 }}></View>
            <Wrapper onLayout={(e) => {
                const { width } = e.nativeEvent.layout
                setWrapperWidth(width)
            }}>
                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '20%',
                    height: 50,
                    backgroundColor: '#e9ecef',
                    left: gradientItemLeftValue,
                    borderStyle: 'solid',
                    borderRadius: 3
                }} />
            </Wrapper>
            <View style={{ zIndex: 150, height: 50, backgroundColor: 'white', width: 15 }}></View>
        </BigWrapper>
    );
};


export default NewsItemSkeleton;