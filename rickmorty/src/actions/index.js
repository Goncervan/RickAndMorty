import axios from 'axios'

export function getCharacters(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: result.data
        })
    }
}
export function getLocations(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        return dispatch({
            type: 'GET_LOCATIONS',
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

export function filterCharacters(status, page, gender) {
    return async function (dispatch) {
        let result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`)
        return dispatch({
            type: 'FILTER_CHARACTERS',
            payload: result.data
        })
    }
}