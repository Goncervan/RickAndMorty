const initialState = {
    allCharacters: [],
    characters: [],
    allLocations: [],
    allEpisodes: [],
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_LOCATIONS':
            return {
                ...state,
                allLocations: action.payload
            }
        case 'GET_LOCATIONS_BY_NAME':
            return {
                ...state,
                allLocations: action.payload
            }
        case 'GET_LOCATIONS_BY_DIMENSION':
            return {
                ...state,
                allLocations: action.payload
            }
        case 'GET_EPISODES':
            return {
                ...state,
                allEpisodes: action.payload
            }
        case 'GET_EPISODES_BY_NAME':
            return {
                ...state,
                allEpisodes: action.payload
            }
        case 'GET_EPISODES_BY_NUMBER':
            return {
                ...state,
                allEpisodes: action.payload
            }
        case 'GET_CHARACTERS':
            return {
                ...state,
                allCharacters: action.payload,
                characters: action.payload
            }
        case 'GET_CHARACTER_BY_NAME':
            return {
                ...state,
                allCharacters: action.payload,
                characters: action.payload
            }
        case 'FILTER_CHARACTERS':
            return {
                ...state,
                allCharacters: action.payload
            }
        default: return state;
    }
}
export default rootReducer;