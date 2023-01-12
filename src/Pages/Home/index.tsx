import * as React from'react'
import { Button, Text, View } from 'react-native'

type IHome = {
    navigation: any,
}

const Home : React.FC<IHome> = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title='Repositories' onPress={() => navigation.navigate('Repositories')}/>
        </View>
    );
}

export default Home;