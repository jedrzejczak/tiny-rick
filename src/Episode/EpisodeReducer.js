import { EPISODES_LOADED } from 'Episode/Load/EpisodeLoadMany'
import { SINGLE_EPISODE_LOADED } from 'Episode/Load/EpisodeLoadSingle'

export const getInitialState = () => ({
    meta: {},
    items: {},
    searchKey: null,
    current: null,
})

const EpisodeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case EPISODES_LOADED: {
            const items =
                action.searchKey !== state.searchKey
                    ? action.items
                    : { ...state.items, ...action.items }
            return {
                ...state,
                meta: action.meta,
                items,
                searchKey: action.searchKey,
            }
        }
        case SINGLE_EPISODE_LOADED:
            return {
                ...state,
                current: action.episode,
            }
        default:
            return state
    }
}

export default EpisodeReducer
