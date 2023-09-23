import { useTranslation } from "react-i18next";
import {useState, useEffect, useContext} from 'react';

//Style
import '../../styles/selectRoute.scss';

//icons
import {FaMapMarkerAlt} from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai';

//Components
import ItemList from "../ItemList";

//Database
import data from '../../api/frontend_data_gps.json';

//Types
import { Route } from "../../interfaces/route";

//Context
import { RouteContext } from "../../context/RouteContext";

const SelectRoute = ()=>{

  const {t} = useTranslation();
  const [showSelectRoute, setShowSelectRoute] = useState(true);
  const [routes, setRoutes] = useState<Route[]>([]);
  const {runningSimulate} = useContext(RouteContext);

  useEffect(()=>{
    const newRoutesArray: Route[] = []
    data.courses.forEach((route)=>{
      newRoutesArray.push({
        speed_max: route.speed_max,
        course: {
          start_at: route.start_at,
        end_at: route.end_at,
        distance: route.distance,
        duration: route.duration,
        gps: route.gps
        }
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
              <FaMapMarkerAlt color='#ff0000' size={16}/>
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
