import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { router, useNavigation } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }


    return (
        <View className='px-10 mt-5'>

            {/* <Link href={'./products'} asChild>
                <CustomButton
                    color='primary'
                >
                    Productos
                </CustomButton>
            </Link> */}

            <CustomButton
                color='primary'
                className='mt-2'
                onPress={() => router.push('/products')}
            >
                Productos
            </CustomButton>

            <CustomButton
                color='secondary'
                className='mt-2'
                onPress={() => router.push('/profile')}
            >
                Profile
            </CustomButton>

            <CustomButton
                color='tertiary'
                className='mt-2'
                onPress={() => router.push('/settings')}
            >
                Ajustes
            </CustomButton>

            <CustomButton
                variant='text-only'
                className='mt-2'
                onPress={() => router.push('/products')}
            >
                Productos
            </CustomButton>

            <CustomButton
                onPress={onToggleDrawer}
            >Abrir menú</CustomButton>

            {/* <Link className='mb-5' href={'./products'}>Productos</Link>
                <Link className='mb-5' href={'./profile'}>Perfil</Link>
                <Link className='mb-5' href={'./settings'}>Ajustes</Link> */}
        </View>
    )
}

export default HomeScreen