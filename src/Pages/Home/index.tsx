import React, { useState } from 'react'
import { Container, ContainerInput, Hide, InputUser, Search } from './style';
import api from '../../services/api';
import { Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import UserData from '../../components/userData';
import Repositories from '../Repositories';

interface IDataUser {
    name: string;
    avatar_url: string;
    blog: string;
    company: string;
    bio: string;
    twitter: string;
    followers: number;
    following: number;
    html_url: string;
    location: string;
}

const Home: React.FC = () => {
    const [search, setSearch] = useState<string>("")
    const [data, setData] = useState<IDataUser>()

    const handleSearch = () => {
        api.get(`/users/${search}`).then(
            (res) => {
                setData(res.data)
            }
        )
    }

    return (
        <>
            {search && (
                <Hide>
                    <Repositories user={search} />
                </Hide>
            )}
            <ScrollView>
                <Container>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior='position' enabled>
                            <>
                                <ContainerInput style={!data && ({ transform:[{translateY: 300}] })}>
                                    <InputUser
                                        onChangeText={(e: string) => setSearch(e)}
                                        placeholder='Digite um usuário do GitHub'
                                    />
                                    <Search
                                        title="&#x1F50E;"
                                        onPress={handleSearch}
                                    />
                                </ContainerInput>

                            </>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>

                    {data && (
                        <UserData
                            name={data?.name}
                            image={data?.avatar_url}
                            blog={data?.blog}
                            company={data?.company}
                            bio={data?.bio}
                            twitter={data?.twitter}
                            follower={data?.followers}
                            following={data?.following}
                            html_url={data?.html_url}
                            location={data?.location}
                        />
                    )}
                </Container>
            </ScrollView>
        </>
    );
}

export default Home;