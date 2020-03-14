import React, { Animated, Image, View, Modal } from 'react-native'
import LottieView from 'lottie-react-native'
import {
    PokeballAnimationContainer,
    PokeballImageContainer
} from './style'


const jsonType = {
    poke: require()
}

function LoadingAnimation() {

    return (
        <LottieView />
    )

}

export default LoadingAnimation