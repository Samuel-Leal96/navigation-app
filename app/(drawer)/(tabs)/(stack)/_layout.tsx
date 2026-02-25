import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack?: boolean) => {

        if (canGoBack) {
            router.back();
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ canGoBack, tintColor }) => (
                    <Ionicons
                        name={canGoBack ? 'chevron-back-outline' : "grid-outline"}
                        size={20}
                        color={tintColor}
                        onPress={() => onHeaderLeftClick(canGoBack)}
                        className='mr-5'
                    />
                )
            }}
        >
            <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
            <Stack.Screen name="products/index" options={{
                title: "Productos"
            }} />
            <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
            <Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
        </Stack>
    )
}

export default StackLayout