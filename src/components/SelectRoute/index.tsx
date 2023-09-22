import { useTranslation } from "react-i18next"
import {useState, useEffect, useContext} from 'react'

//Style
import '../../styles/selectRoute.scss'

//icons
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

//Components
import ItemList from "../ItemList"

//Database
import data from '../../api/frontend_data_gps.json'

//Types
import { Course } from "../../interfaces/course"

//Context
import { RouteContext } from "../../context/RouteContext"

const SelectRoute = ()=>{

  const {t} = useTranslation()
  const [showSelectRoute, setShowSelectRoute] = useState(true)
  const [routes, setRoutes] = useState<Course[]>([])
  const {runningSimulate} = useContext(RouteContext)

  useEffect(()=>{
    const newRoutesArray: Course[] = []
    data.courses.forEach((course)=>{
      newRoutesArray.push({
        start_at: course.start_at,
        end_at: course.end_at,
        distance: course.distance,
        duration: course.duration,
        gps: course.gps
      })
    })
    setRoutes(newRoutesArray)
  },[])

  return(
    <div className="containerRoutes">
      {
        showSelectRoute && !runningSimulate ? (
          <div className="containerBtnSelect">
            <button className="btnSelectRoute" onClick={()=> setShowSelectRoute(false)}>
              <FaMapMarkerAlt color='#ff0000' />
              {t('Selecione trajeto')}
            </button>
      </div>
        ) : (
          <div>
            {
              !runningSimulate && (
                <div className="listRoutes">
                  <div className="headerListRoutes">
                    <h2 className="titleRoutes">{t('Trajetos')}</h2>
                    <button className="iconClose" onClick={()=> setShowSelectRoute(true)}>
                      <AiFillCloseCircle color='ff0000'/>
                    </button>
                  </div>
                  <ul className="container">
                    {routes.map((routeSelected, i) => (
                      <ItemList routeSelected={routeSelected} key={i} setShowSelectRoute={setShowSelectRoute}/>
                    ))}
                  </ul>
                </div>
              )
            }
          </div>
        )
      }

    </div>
  )
}

export default SelectRoute
