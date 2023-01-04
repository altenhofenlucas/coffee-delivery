import { Location } from '../../LocationContext'

export enum LocationActionTypes {
  ADD_LOCATION = 'ADD_LOCATION',
  REMOVE_LOCATION = 'REMOVE_LOCATION',
}

export function addLocationAction(location: Location) {
  return {
    type: LocationActionTypes.ADD_LOCATION,
    payload: location,
  }
}

export function removeLocationAction() {
  return {
    type: LocationActionTypes.REMOVE_LOCATION,
    payload: null,
  }
}
