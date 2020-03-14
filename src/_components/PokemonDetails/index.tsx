import React, { useEffect, useState, Fragment, useMemo } from 'react'
import { View, Text, ActivityIndicator, ScrollView, StyleSheet, Image, Animated, Easing } from 'react-native'
import LoadingAnimation from '../LoadingAnimation'
import LottieView from 'lottie-react-native'
import StatValueAnimation from '../StatValueAnimation'
import {
    PokemonDetailContainer,
    PokemonImageContainer,
    PokemonImageContent,
    Header,
    PokemonDescriptionContainer,
    PokemonIDContainer,
    PokemonName,
    PokemonNumber,
    TypeContainer,
    TypeButton,
    TypeText,
    FlavorTextContainer,
    AbilitiesContainer,
    styles,
    Aligner,
    LeaveModalButton,
    DescritpionStatsContainer,
    AbilitiesListContainer,
    SubTitle,
    StatNameContainer,
    StatValueContainer,
    BaseStatsContainer,
    StatsListContainer,
    LeaveModalButtonContainer,
    WhiteText,
    PokeballImageContainer,
    PokeballImageContent,
    FlavorText,
    LoadingView
} from './style'


interface IProps {
    isDetailMode: () => void
    pokemonDetails: {
        name: string
    }
}

interface IAbility {
    ability: {
        name: React.ReactNode
    }
}

interface IBaseStats {
    base_stat: React.ReactNode
    stat: {
        name: React.ReactNode
    }
}

function PokemonDetails(props: any) {

    const {
        isDetailMode,
        pokemonDetails,
        cancelPokemonDetail
    } = props

    const [pokemonSpecies, setPokemonSpecies] = useState()
    const [description, setDescription] = useState('')
    const [pokemonColor, setPokemonColor] = useState('')
    const [statArr, setStatArr] = useState()
    const [highestStat, setHighestStat] = useState()

    const fetchPokemonSpecies = () => {
        const get = async () => {
            const res = await fetch(pokemonDetails.species.url)

            const formatted = await res.json()

            setPokemonSpecies(formatted)
        }
        try {
            if (!pokemonDetails) return
            get()
        } catch (err) {
            console.error(err)
        }
    }

    function handlePokemonDescription() {
        if (!pokemonSpecies) return
        const desc = pokemonSpecies?.flavor_text_entries.filter((item: { language: { name: string } }) => item.language.name === 'en')[0].flavor_text.toString()
        setDescription(desc)
    }

    function handlePokemonColor() {
        if (!pokemonSpecies) return
        const color = pokemonSpecies?.color.name.toString()
        setPokemonColor(color)
    }

    function handleHighestStat() {
        if (!pokemonDetails) return
        setStatArr(pokemonDetails.stats.map((item: { base_stat: any }) => item.base_stat))
        if (!statArr) return
        setHighestStat(statArr.reduce((a: number, b: number) => Math.max(a, b)))
    }

    useEffect(fetchPokemonSpecies, [pokemonDetails, isDetailMode])

    useEffect(handlePokemonDescription, [pokemonSpecies])

    useEffect(handlePokemonColor, [pokemonSpecies])

    useEffect(handleHighestStat, [pokemonDetails])

    const englishGenus = pokemonSpecies?.genera.filter((item: { language: { name: string } }) => item.language.name === 'en')[0].genus.toString() || 'Opsiee'


    return (
        <PokemonDetailContainer visible={isDetailMode} animationType={'slide'} transparent={false}  >
            <ScrollView>
                {pokemonDetails ?
                    <>
                        <Header style={styles.shadow} pokemonColor={pokemonColor}>
                            <Aligner>
                                <PokemonIDContainer>
                                    <PokemonName>{pokemonDetails.name.toUpperCase()}</PokemonName>
                                    <PokemonNumber>{'#' + pokemonDetails.id}</PokemonNumber>
                                    <SubTitle>{englishGenus}</SubTitle>
                                    <TypeContainer>
                                        {pokemonDetails.types.map((item: { type: { name: string } }, i: number) => (
                                            <TypeButton key={i}>
                                                <TypeText>{item.type.name}</TypeText>
                                            </TypeButton>
                                        )
                                        )}
                                    </TypeContainer>
                                </PokemonIDContainer>
                            </Aligner>
                            <PokemonImageContainer>
                                <PokemonImageContent source={{ uri: pokemonDetails.sprites.front_default }} resizeMode='contain' />
                            </PokemonImageContainer>
                        </Header>


                        <PokemonDescriptionContainer>
                            <SubTitle>Description</SubTitle>
                            <FlavorTextContainer>
                                {description ? <FlavorText>{description}</FlavorText> : null}
                            </FlavorTextContainer>
                            <DescritpionStatsContainer>
                                <View>
                                    <Text>{`Height: ${pokemonDetails.height}m`}</Text>
                                </View>
                                <View>
                                    <Text>{`Weight: ${pokemonDetails.weight}kg`}</Text>
                                </View>
                            </DescritpionStatsContainer>
                        </PokemonDescriptionContainer>


                        <PokemonDescriptionContainer>
                            <SubTitle>{`Abilities`}</SubTitle>
                            <AbilitiesContainer>
                                {pokemonDetails.abilities.map((item: IAbility, i: number) => {
                                    return (
                                        <View key={i}>
                                            <Text>{item.ability.name?.toString().toUpperCase()}</Text>
                                        </View>
                                    )
                                })}
                            </AbilitiesContainer>
                        </PokemonDescriptionContainer>


                        <PokemonDescriptionContainer>
                            <SubTitle>{`Base Stats`}</SubTitle>
                            <BaseStatsContainer>
                                {pokemonDetails.stats.map((item: IBaseStats, i: number) => {
                                    return (
                                        <StatsListContainer key={i}>
                                            <StatNameContainer>
                                                <WhiteText>{item.stat.name}</WhiteText>
                                            </StatNameContainer>
                                            {/* <StatValueContainer>
                                                <Text>{item.base_stat}</Text>
                                            </StatValueContainer> */}
                                            {/* <Text>{statArr[i]}</Text> */}
                                            <StatValueAnimation statValue={statArr[i]} highestStat={highestStat} />
                                        </StatsListContainer>
                                    )
                                })}
                            </BaseStatsContainer>
                        </PokemonDescriptionContainer>
                        <LeaveModalButtonContainer>
                            <LeaveModalButton title={'back'} onPress={cancelPokemonDetail} color={'#FF3636'} />
                        </LeaveModalButtonContainer>
                    </>
                    : (
                        <LoadingView>
                            <LottieView source={require('../../assets/load.json')} autoPlay loop />
                        </LoadingView>

                    )
                }
            </ScrollView>
        </PokemonDetailContainer>
    )
}

export default PokemonDetails