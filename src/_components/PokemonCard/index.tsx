import React from 'react'
import { PokemonName, OpacityContainer, PokemonImageContainer, PokemonIndex, PokemonImageContent } from './style'

interface IProps {
    title: string
    index: number
    handleFetchSelectedPokemon: () => void
}


function PokemonCard(props: IProps) {

    const { title, index, handleFetchSelectedPokemon } = props

    return (
        <OpacityContainer onPress={handleFetchSelectedPokemon} >
            <PokemonImageContainer>
                <PokemonImageContent source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${String(index + 1)}.png` }} />
            </PokemonImageContainer>
            <PokemonIndex>{'#' + String(index + 1)}</PokemonIndex>
            <PokemonName>{title.toUpperCase()}</PokemonName>
        </OpacityContainer>
    )
}

export default PokemonCard