import React from 'react'
import { Text, View, Linking } from 'react-native'
import { ButtonLink, Container, ContainerBtn, ContainerStack, ContainerTag, Stack, Tags, Title } from './style';

interface IRepository {
    name: string;
    topics: string[];
    language: string;
    html_url: string;
}

const Repository: React.FC<IRepository> = ({
    name,
    topics,
    language,
    html_url,
}) => {
    return (
        <Container>
            <Title>{name}</Title>
            {topics && (
                <ContainerTag>
                    {topics.map(item => (
                        <Tags>{item}</Tags>
                    ))}
                </ContainerTag>
            )}
            {language && (
                <ContainerStack>
                    <Stack>
                        {language}
                    </Stack>
                </ContainerStack>
            )}
            <ContainerBtn>
                <ButtonLink 
                    title="View Repo"
                    onPress={() => Linking.openURL(html_url)}    
                />
            </ContainerBtn>
        </Container>
    );
}

export default Repository;