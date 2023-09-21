import { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";

import { Course } from "../interfaces/course";

export interface routeContextInterface{
  route: Course,
  setRoute: Dispatch<SetStateAction<Course>>
}

const defaultSate = {
  route: {
    start_at: '',
    end_at: '',
    distance: 0,
    duration: 0,
    gps: []
  },
  setRoute: (route: Course) => route
} as routeContextInterface

export const RouteContext = createContext(defaultSate)

type RouteProviderProps = {
  children: ReactNode
}

export default function RouteProvider({children} : RouteProviderProps){

  const [route, setRoute] = useState<Course>({
    start_at: '',
    end_at: '',
    distance: 0,
    duration: 0,
    gps: []
  })

  return(
    <RouteContext.Provider value={{route, setRoute}}>
      {children}
    </RouteContext.Provider>
  )
}
