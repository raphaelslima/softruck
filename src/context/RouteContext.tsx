import { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";

import { Route } from "../interfaces/route";

export interface routeContextInterface{
  route: Route,
  setRoute: Dispatch<SetStateAction<Route>>,
  runningSimulate: boolean,
  setRunningSimulate: Dispatch<SetStateAction<boolean>>
}

const defaultSate = {
  route: {
    speed_max: 0,
    course : {
      start_at: '',
    end_at: '',
    distance: 0,
    duration: 0,
    gps: []
    }
  },
  setRoute: (route: Route) => route,
  runningSimulate: false,
  setRunningSimulate: (runningSimulate: boolean) => runningSimulate
} as routeContextInterface

export const RouteContext = createContext(defaultSate)

type RouteProviderProps = {
  children: ReactNode
}

export default function RouteProvider({children} : RouteProviderProps){

  const [route, setRoute] = useState<Route>({
    speed_max: 0,
    course : {
      start_at: '',
    end_at: '',
    distance: 0,
    duration: 0,
    gps: []
    }
  })

  const [runningSimulate, setRunningSimulate] = useState(false);

  return(
    <RouteContext.Provider value={{route, setRoute, runningSimulate, setRunningSimulate}}>
      {children}
    </RouteContext.Provider>
  )
}
