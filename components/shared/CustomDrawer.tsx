import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView
            {...props}
            scrollEnabled={false}
        >
            <View className='flex justify-center items-center mx-3 mb-5 p-10 h-[150px] rounded-xl bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                    <Text className='text-3xl font-roboto-black text-primary'>SLV</Text>
                </View>
            </View>

            {/* Drawer Items */}

            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}

export default CustomDrawer