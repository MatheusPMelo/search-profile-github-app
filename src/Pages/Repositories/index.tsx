import * as React from'react'
import { Button, Text, View } from 'react-native'

type IRepository = {
    navigation: any,
}

const Repositories : React.FC<IRepository> = ({navigation}) => {
    return (
        <View>
            <Text>Repositories</Text>
        </View>
    );
}

export default Repositories;