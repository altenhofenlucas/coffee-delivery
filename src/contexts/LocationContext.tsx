import { createContext, ReactNode, useReducer } from 'react'
import { addLocationAction, removeLocationAction } from './reducers/location/actions'
import { locationReducer } from './reducers/location/reducer'

export interface Location {
  city: string
  state: string
}

interface LocationContextData {
  location: Location | null
  addLocation: (location: Location) => void
  removeLocation: () => void
}

export const LocationContext = createContext({} as LocationContextData)

interface LocationContextProviderProps {
  children: ReactNode
}

export function LocationContextProvider({ children }: LocationContextProviderProps) {
  const [locationState, dispatch] = useReducer(
    locationReducer,
    {
      location: null,
    },
    () => {
      const localData = localStorage.getItem('@coffee-delivery:location-state-1.0.0')
      return localData ? JSON.parse(localData) : { location: null }
    },
  )

  const { location } = locationState

  function addLocation(location: Location) {
    dispatch(addLocationAction(location))
  }

  function removeLocation() {
    dispatch(removeLocationAction())
  }

  return (
    <LocationContext.Provider value={{ location, addLocation, removeLocation }}>
      {children}
    </LocationContext.Provider>
  )
}
