import React, { useEffect } from 'react';

import { Slot, SplashScreen } from 'expo-router';

import { useFonts } from 'expo-font';


import './global.css';


SplashScreen.preventAutoHideAsync();


const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf')
    })


    useEffect(() => {

        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();

    }, [fontsLoaded, error])


    if (!fontsLoaded && !error) return null;

    return (
        <Slot />
    )
}

export default RootLayout