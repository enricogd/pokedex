import React, { useState, useEffect } from 'react';
import { FlatList, View, Image, } from 'react-native';

import PokemonCard from '../PokemonCard';
import { MainView, TitlesContainer } from './style';
import PokemonDetails from '../PokemonDetails';
import Header from '../Header'

interface IResult {
    name: string
    url: string
}

function Main() {

    const [pokemonList, setPokemonList] = useState<Array<IResult>>([])
    const [isDetailMode, setIsDetailMode] = useState(false)
    const [pokemonDetails, setPokemonDetails] = useState()

    const cancelPokemonDetail = () => {
        setPokemonDetails(undefined)
        setIsDetailMode(false)
    }

    function handleFetchPokemons() {
        const get = async () => {
            const pokemonListResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=890')

            const { results } = await pokemonListResponse.json()

            setPokemonList(results)
        }

        try {
            get()
        } catch (err) {
            console.error(err)
        }
    }

    function handleFetchSelectedPokemon(index: number) {
        const { url } = pokemonList[index]

        setIsDetailMode(true)

        const get = async () => {
            const res = await fetch(url)

            const formatted = await res.json()

            setPokemonDetails(formatted)
        }

        try {
            get()
        } catch (err) {
            console.error()
        }
    }

    useEffect(handleFetchPokemons, [])

    return (
        <MainView>
            {/* <View>
                <Image source={require('../../assets/pokeball.png')}/>
            </View> */}
            <Header />

                <PokemonDetails isDetailMode={isDetailMode} pokemonDetails={pokemonDetails} cancelPokemonDetail={cancelPokemonDetail} />

            <TitlesContainer>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item, i) => String(i)}
                    data={pokemonList}
                    renderItem={({ item, index }) => (
                        <PokemonCard
                            title={item.name}
                            index={index}
                            handleFetchSelectedPokemon={() =>
                                handleFetchSelectedPokemon(index)
                            }
                        />
                    )}
                />
            </TitlesContainer>
        </MainView>
    )
}

export default Main

