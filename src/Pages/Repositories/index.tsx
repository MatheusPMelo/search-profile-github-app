import React, { useState, useEffect } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import { Container } from './style';
import Repository from '../../components/repository';
import api from '../../services/api';

interface IUser {
    user: string;
}
interface IRepository {
    name: string,
    topics: string[],
    language: string,
    html_url: string,
}

const Repositories: React.FC<IUser> = ({ user }) => {
    const [repos, setRepos] = useState<IRepository[]>([])

    
        user && useEffect(() => {
            api.get(`/users/${user}/repos`).then((response) => {
                setRepos(response.data)
            })
        }, [])
    
    return (
        <ScrollView>
            <Container>
                {repos && repos.map((repo) => (
                    <Repository
                        key={repo.name}
                        name={repo.name}
                        topics={repo.topics}
                        language={repo.language}
                        html_url={repo.html_url}
                    />
                ))}
            </Container>
        </ScrollView>
    );
}

export default Repositories;