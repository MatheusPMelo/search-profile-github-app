import React from 'react'
import { Text, View, Linking } from 'react-native'
import { ContainerImage, ContainerName, ContainerUser, Img, Name } from './style';
import { Ionicons } from '@expo/vector-icons';

const UserData: React.FC<any> = ({
    name,
    image,
    blog,
    company,
    bio,
    twitter,
    follower,
    following,
    html_url,
}) => {
    return (
        <ContainerUser>
            <ContainerImage>
                <Img source={{ uri: `${image}` }} />
            </ContainerImage>
            <View>
                {name && (
                    <ContainerName>
                        <Name>{name}</Name>
                    </ContainerName>
                )}
                {blog && (
                    <Text>{blog}</Text>
                )}
                {company && (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons size={20} color="#386BEE" name="file-tray" style={{ margin: 10 }} />
                        <Text>{company}</Text>
                    </View>
                )}
                {bio && (
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons size={20} color="#386BEE" name="heart" style={{ marginHorizontal: 10, marginVertical: 15}} />
                        <Text style={{width: 300}}>{bio}</Text>
                    </View>
                )}
                <View style={{ flexDirection: 'row' }}>
                    {follower && (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons size={20} color="#386BEE" name="person-add" style={{ margin: 10 }} />
                            <Text>{follower}</Text>
                        </View>
                    )}
                    {following && (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons size={20} color="#386BEE" name="people" style={{ margin: 10 }} />
                            <Text>{following}</Text>
                        </View>
                    )}
                </View>
                {twitter && (
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons size={20} color="#386BEE" name="heart-circle" style={{ margin: 10 }} />
                        <Text>{twitter}</Text>
                    </View>
                )}
                {html_url && (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons size={20} color="#386BEE" name="link" style={{ margin: 10 }} />
                        <Text
                        style={{color: "#386BEE"}}
                        onPress={() => {
                            Linking.openURL(html_url);
                        }}
                        >{html_url}</Text>
                    </View>
                )}
            </View>
        </ContainerUser>
    );
}

export default UserData;