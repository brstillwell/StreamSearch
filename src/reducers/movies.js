import { FETCH_POPULAR_MOVIES, SEARCH_MOVIES, FETCH_MOVIE, CLEAR_MOVIE, FETCH_MOVIE_REVIEWS, FETCH_MOVIE_TRAILERS, SEARCH_SHOWS, FETCH_SHOW, FETCH_SEASONS} from '../actions/types';

const initialState = { list: [], movie: null, show: [] , seasons: []};
export default function(state = initialState, action) {

	switch (action.type) {
		case FETCH_POPULAR_MOVIES: {
			return { ...state,
				list: action.payload
			};
		}
		case SEARCH_MOVIES: {
			return { ...state,
				list: action.payload
			}
		}
		case FETCH_MOVIE: {
			return { ...state,
				movie: action.payload
			}
		}
		case CLEAR_MOVIE: {
			return { ...state,
				movie: initialState.movie
			}
		}
		case SEARCH_SHOWS: {
			return { ...state,
				list: action.payload
			}
		}
		
		case FETCH_SHOW: {
			return { ...state,
				show: action.payload
			}
		}
		
		case FETCH_SEASONS: {
			return { ...state,
				seasons: action.payload
			}
		}
	}

	return state;
}