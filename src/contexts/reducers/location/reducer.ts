import { Location } from '../../LocationContext'
import { LocationActionTypes } from './actions'

interface LocationState {
  location: Location | null
}

export function locationReducer(
  state: LocationState,
  action: { type: LocationActionTypes; payload: Location | null },
): LocationState {
  switch (action.type) {
    case LocationActionTypes.ADD_LOCATION:
      localStorage.setItem(
        '@coffee-delivery:location-state-1.0.0',
        JSON.stringify(action.payload),
      )
      return {
        ...state,
        location: action.payload,
      }
    case LocationActionTypes.REMOVE_LOCATION:
      localStorage.setItem('@coffee-delivery:location-state-1.0.0', '')
      return {
        ...state,
        location: null,
      }
    default:
      return state
  }
}
