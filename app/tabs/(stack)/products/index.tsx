import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {
    return (
        <View className='flex flex-1 px-4'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className=' mt-10 border-b border-gray-300 pb-4'>
                        <Text className='text-2xl font-roboto-black'>{item.title}</Text>
                        <Text className='font-roboto-light'>{item.description}</Text>

                        <View className='flex flex-row justify-between mt-2'>
                            <Text className='font-roboto-black'>${item.price}</Text>
                            <Link
                                href={`/tabs/(stack)/products/${item.id}`}
                            >
                                <Text className='text-primary'>Ver detalles</Text>
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default ProductsScreen