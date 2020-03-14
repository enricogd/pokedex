import styled from 'styled-components/native'

export const OpacityContainer = styled.TouchableOpacity`
    flex: 1;
    flex-direction: column;
    /* height: 120px;
    width:120px;
    padding: 10px; */
    margin: 10px;
    justify-content: center;
    align-content: center;
    /* height: 155px; */
    border: 2px;
    border-color: red;
    border-radius: 30px;
    padding: 10px;
    background-color: white;
`

export const PokemonImageContainer = styled.View`
    flex: 100;
    background-color: #fafafa;
    border-radius: 50px;
    /* width: 90px; */
    justify-content: center;
    align-items: center;
    border: 1px;
    border-color: #f0f0f0;
`

export const PokemonImageContent = styled.Image`
    flex: 1;
    width: 75px;
    height: 75px;
`

export const PokemonName = styled.Text`
    flex: 30;
    color: red;
    text-align: center;
`

export const PokemonIndex = styled.Text`
    flex: 20;
`