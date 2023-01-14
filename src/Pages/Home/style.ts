import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 50px;
    height: 100%;
    flex: 1;
`

export const ContainerInput = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    transition: .5s linear all ease-in-out;
    margin-top: 30px;
`

export const InputUser = styled.TextInput`
    color: #212121;
    padding: 10px 20px;
    background: #e1e1e1;
    border-radius: 10px;
    margin-right: 10px;
`

export const Search = styled.Button`
    padding: 10px;
    border-radius: 20px;
`

export const Hide = styled.View`
    display: none;
`