import { useContext } from "react";
import { useTranslation } from "react-i18next";

//Style
import '../../styles/itemList.scss';

//Interface
import { Route } from "../../interfaces/route";

//Helpers
import {formatDuration} from '../../helpers/formatDuration';
import {formatDistance} from '../../helpers/formatDistance';
import {formatDate} from '../../helpers/formatDate';
import {formatTime} from '../../helpers/formatTime';

//Context
import { RouteContext } from "../../context/RouteContext";

interface PropsItemList{
  routeSelected: Route,
  setShowSelectRoute: React.Dispatch<React.SetStateAction<boolean>>
}

//Icons
import {AiOutlineDoubleRight} from 'react-icons/ai';

const ItemList = ({routeSelected, setShowSelectRoute}: PropsItemList)=>{

  const {setRoute, setRunningSimulate} = useContext(RouteContext);

  const {t} = useTranslation();

  const handleSimulateRoute = (routeSelected: Route) => {
    setShowSelectRoute(true);
    setRunningSimulate(true);
    if(routeSelected) setRoute(routeSelected);
  };

  return(
    <li className="container itemList">
      <div className="containerTitle">
        <div>
          <h3 className="title">{t('Origem')}</h3>
          <p>{`${routeSelected.course.gps[0].address}`}</p>
        </div>
        <div>
          <h3 className="title">{t('Destino')}</h3>
          <p> {`${routeSelected.course.gps[routeSelected.course.gps.length - 1].address}`}</p>
        </div>
      </div>
      <div className="details">
        <div className="detalsItem">
          <span>{t('Duracao')} {`${formatDuration(routeSelected.course.duration)}`}</span>
          <span>{t('Distancia')} {`${formatDistance(routeSelected.course.distance)}`}</span>
        </div>
        <div className="detalsItem">
          <span>{t('Data de partida')} {`${formatDate(routeSelected.course.start_at)}`}</span>
          <span>{t('Horario de partida')} {`${formatTime(routeSelected.course.start_at)}`}</span>
        </div>
        <div className="detalsItem">
          <span>{t('Data de chegada')} {`${formatDate(routeSelected.course.end_at)}`}</span>
          <span>{t('Horario de chegada')} {`${formatTime(routeSelected.course.end_at)}`}</span>
        </div>
      </div>
      <div className="btnSimulateContainer">
        <button onClick={() => handleSimulateRoute(routeSelected)}>Simular Rota <AiOutlineDoubleRight className='rightArrow'/></button>
      </div>
    </li>
  )
}

export default ItemList;
