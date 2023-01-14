import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 16px;
    background-color: ${({theme}) => theme.colors.tertiary}
    width: 44%;
    margin: 10px;
    margin-top: 20px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.primary};
`

export const ContainerTag = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 5px 0 0;
`

export const Tags = styled.Text`
    color: ${({theme}) => theme.colors.secondary};
    margin: 5px;
`

export const ContainerStack = styled.View`
    margin: 5px 0;
`

export const Stack = styled.Text`
    font-size: 12px;
    color: ${({theme}) => theme.colors.textSecondary};
    font-weight: bold;
`

export const ContainerBtn = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 5px;
`

export const ButtonLink = styled.Button`
    width: 100%;
`