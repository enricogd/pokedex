import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Text, View, Animated, StyleSheet } from 'react-native'
import { StatsListContainer, StatNameContainer, StatValueContainer } from './style'


interface IBaseStats {
    base_stat: React.ReactNode
    stat: {
        name: React.ReactNode
    }
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}



function StatValueAnimation(props: any) {
    const { statValue, highestStat } = props


            let animation = useRef(new Animated.Value(0));
            const [progress, setProgress] = useState(0);
            useInterval(() => {
                if (progress < 1) {
                    setProgress(progress + 1);
                }
            }, 1000);

            useEffect(() => {
                Animated.timing(animation.current, {
                    toValue: progress,
                    duration: 1000
                }).start();
            }, [progress])

            const width = animation.current.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", (statValue / highestStat) + "%"],
                extrapolate: "clamp"
            })


            return (
                <StatValueContainer>
                    <Animated.View />
                    <Text>{statValue}</Text>
                </StatValueContainer>
            )





}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    progressBar: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
    }
});
export default StatValueAnimation