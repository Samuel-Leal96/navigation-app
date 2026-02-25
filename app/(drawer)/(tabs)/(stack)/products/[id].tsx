import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductsScreen = () => {

    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    const product = products.find((p) => p.id === id);

    useEffect(() => {
        navigation.setOptions({
            title: product?.title || 'Producto no encontrado'
        })
    }, [product])

    if (!product) {
        return <Redirect href={'/'} />
    }

    return (
        <View className='px-5 mt-2 flex'>
            <Text className='font-roboto-black text-2xl'>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text className='font-roboto-black text-right'>${product.price}</Text>
        </View>
    )
}

export default ProductsScreen