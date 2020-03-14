import styled from 'styled-components/native'
import { StyleSheet, Animated } from 'react-native'

const colors = {
    background: '#F69A88',
    foreground: '#FF3636',
    border: '#FF5A5A'
}

const typeColors = {
    black: '#000000',
    blue: '#0900FF',
    brown: '#8D6E63',
    gray: '#D5D8DC',
    green: '#27AE60',
    pink: '#F1948A',
    purple: '#8E44AD',
    red: '#F44336',
    white: '#EEEEEE',
    yellow: '#FFEB3B'
}

export const styles = StyleSheet.create({
    shadow: {
        elevation: 5
    }
})

export const PokemonDetailContainer = styled.Modal`
    background-color: ${colors.background};
`

export const WhiteText = styled.Text`
    color: #FFFFFF;
`

export const SubTitle = styled.Text`
    font-size: 18px;
    color: #ffffff;
`

interface IExtraStyledProps { 
    pokemonColor: string
}

export const Header = styled.View<IExtraStyledProps>`
    flex-direction: row;
    background-color: ${({ pokemonColor: p }) => p || 'red' };
    border-bottom-width: ${StyleSheet.hairlineWidth};
    border-radius: 6px;
    margin-right: 8px;
    margin-left: 8px;
    margin-top: 8px;
    padding: 8px;
`
export const Aligner = styled.View`
    flex: 5;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
`


export const PokemonIDContainer = styled.View`
    border-radius:10px;
`

export const PokemonName = styled.Text`
    font-size: 24px;
    color: #ffffff;
`

export const PokemonNumber = styled.Text`
    font-size: 18px;
    color: #fafafa;
`

export const TypeContainer = styled.View`
    flex-direction: row;
    margin-top: 5px;
`

export const TypeButton = styled.View`
    flex-direction: row;
    background-color: #FF5A5A;
    align-items: center;
    margin-right: 5px;
    padding: 3px;
    border-radius: 6px;
    min-width: 100px;
    justify-content: center;
`

export const TypeText = styled.Text`
    color: #ffffff;
`


export const PokemonImageContainer = styled.View`
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    width: 120px;
    height: 120px;
`

export const PokemonImageContent = styled.Image`
    height: 150px;
    width: 150px;

`

export const PokemonDescriptionContainer = styled.View`
    margin-right: 8px;
    margin-left: 8px;
    margin-top: 8px;
    border-radius: 6px;
    background-color: ${colors.foreground};
    padding: 8px;
    height: auto;
    align-items: stretch;
    justify-content: center;
`

export const FlavorTextContainer = styled.View`
    background-color: #F9F9F9;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    margin-top: 5px;
    justify-content: center;
    padding: 10px;
    align-items: center;
    width: auto;
    height: auto;
`

export const FlavorText = styled.Text`
    text-align: center;
`

export const DescritpionStatsContainer = styled.View`
    flex-direction: row;
    background-color: #F9F9F9;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    justify-content: space-between;
    padding: 10px;
    align-items: stretch;
    width: auto;
    height: auto;
    border-top-width: ${StyleSheet.hairlineWidth};
`


export const AbilitiesContainer = styled.View`
    border-color: ${colors.foreground};
    background-color: #F9F9F9;
    border-radius: 6px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const AbilitiesListContainer = styled.View`
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
`

export const BaseStatsContainer = styled.View`
    border-color: ${colors.foreground};
    background-color: #F9F9F9;
    border-radius: 6px;
    margin: 5px;
    padding: 10px;
`

export const StatsListContainer = styled.View`
    flex-direction: row;
    align-items: stretch;
    /* justify-content: space-between; */
`

export const StatNameContainer = styled.View`
    /* flex: 1; */
    margin-top: 2px;
    margin-left: 2px;
    margin-bottom: 2px;    
    background-color: #FF3636;
    padding: 3px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    align-items: center;
    min-width: 120px;
`

export const StatValueContainer = styled.View`
    flex: 1;
    background-color: #F69A88;
    margin-top: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    padding: 3px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    align-items: flex-end;
`

export const LeaveModalButtonContainer = styled.View`
    flex: 1;
    align-items: flex-end;
    padding: 6px;
    border-radius:6px;
    margin: 2px;

`

export const LeaveModalButton = styled.Button`
    color: pink;
`

export const PokeballAnimationContainer = styled.Modal`
`

export const PokeballImageContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PokeballImageContent = styled(Animated.Image)`
    flex: 1;
    width: 150px;
    height: 150px;
    /* align-items: center;
    justify-content: center; */
`

export const LoadingView = styled.View`
    flex-direction: column;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 10px;
    align-items: stretch;
    width: auto;
    height: 750px;
`

 
  
//   @media (prefers-reduced-motion: no-preference) {
//     .App-logo {
//       animation: App-logo-spin infinite 20s linear;
//     }
//   }
 
  
 
//   @keyframes App-logo-spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
  