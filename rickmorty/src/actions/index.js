import axios from 'axios'


export function getLocations(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        return dispatch({
            type: 'GET_LOCATIONS',
            payload: result.data
        })
    }
}
export function getLocationsByDimension(page, dimension) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}&dimension=${dimension}`)
        return dispatch({
            type: 'GET_LOCATIONS_BY_DIMENSION',
            payload: result.data
        })
    }
}
export function getLocationsByName(name) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/location?name=${name}`)
        return dispatch({
            type: 'GET_LOCATIONS_BY_NAME',
            payload: result.data
        })
    }
}
export function getEpisodes(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
        return dispatch({
            type: 'GET_EPISODES',
            payload: result.data
        })
    }
}
export function getEpisodeByName(name) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/episode?name=${name}`)
        return dispatch({
            type: 'GET_EPISODES_BY_NAME',
            payload: result.data
        })
    }
}
export function getEpisodeByNumber(number) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/episode/${number}`)
        return dispatch({
            type: 'GET_EPISODES_BY_NUMBER',
            payload: result.data
        })
    }
}

export function getCharacters(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: result.data
        })
    }
}
export function getCharactersByName(name) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}`)
        return dispatch({
            type: 'GET_CHARACTER_BY_NAME',
            payload: result.data
        })
    }
}

export function filterCharacters(status, page, gender) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`)
        return dispatch({
            type: 'FILTER_CHARACTERS',
            payload: result.data
        })
    }
}