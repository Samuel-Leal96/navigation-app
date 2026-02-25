import React from 'react'

import { Redirect } from 'expo-router'
import "./global.css"

const App = () => {

    // return <Redirect href='./(stack)/home' />
    // return <Redirect href='./drawer' />
    return <Redirect href='/home' />

    // return (
    //     <SafeAreaView>
    //         <View className='mt-6 mx-2.5'>
    //             <Text className='text-5xl' style={{ fontFamily: 'Roboto-Black' }} >Hola mundo</Text>
    //             <Text className='text-4xl font-roboto-black text-primary' >Hola mundo</Text>
    //             <Text className='text-3xl font-roboto-medium text-secondary' >Hola mundo</Text>
    //             <Text className='text-2xl font-roboto-light text-secondary-100' >Hola mundo</Text>
    //             <Text className='text-xl text-tertiary' >Hola mundo</Text>

    //             <Link href='/products'> Productos </Link>
    //         </View>
    //     </SafeAreaView>
    // )
}

export default App