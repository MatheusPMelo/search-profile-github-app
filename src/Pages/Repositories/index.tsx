import * as React from'react'
import { Button, Text, View } from 'react-native'

type IRepository = {
    navigation: any,
}

const Repositories : React.FC<IRepository> = ({navigation}) => {
    return (
        <View>
            <Text>Repositories</Text>
            <Button title='Voltar' onPress={() => navigation.goBack()}/>
        </View>
    );
}

export default Repositories;