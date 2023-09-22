import { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";

import { Course } from "../interfaces/course";

export interface routeContextInterface{
  route: Course,
  setRoute: Dispatch<SetStateAction<Course>>,
  runningSimulate: boolean,
  setRunningSimulate: Dispatch<SetStateAction<boolean>>
}

const defaultSate = {
  route: {
    start_at: '',
    end_at: '',
    distance: 0,
    duration: 0,
    gps: []
  },
  setRoute: (route: Course) => route,
  runningSimulate: false,
  setRunningSimulate: (runningSimulate: boolean) => runningSimulate
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

  const [runningSimulate, setRunningSimulate] = useState(false)

  return(
    <RouteContext.Provider value={{route, setRoute, runningSimulate, setRunningSimulate}}>
      {children}
    </RouteContext.Provider>
  )
}
