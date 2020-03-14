import styled from 'styled-components/native'

export const BaseStatsContainer = styled.View`
    border-color: #FF3636;
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