const initialState = {
    allCharacters:[],
    characters:[],
    allLocations:[],
    allEpisodes:[],
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {
                ...state,
                allCharacters: action.payload,
                characters: action.payload
            }
        case 'GET_LOCATIONS':
            return {
                ...state,
                allLocations: action.payload
            }
        case 'GET_EPISODES':
            return {
                ...state,
                allEpisodes: action.payload
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