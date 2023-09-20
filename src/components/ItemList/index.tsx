import { useTranslation } from "react-i18next"

//Style
import '../../styles/itemList.scss'

//Interface
import { Course } from "../../interfaces/course"

//Helpers
import {formatDuration} from '../../helpers/formatDuration'
import {formatDistance} from '../../helpers/formatDistance'
import {formatDate} from '../../helpers/formatDate'
import {formatTime} from '../../helpers/formatTime'

interface PropsItemList{
  route: Course
  setShowSelectRoute: React.Dispatch<React.SetStateAction<boolean>>
}

const ItemList = ({route, setShowSelectRoute}: PropsItemList)=>{

  const {t} = useTranslation()

  const handleSimulateRoute = () => {
    setShowSelectRoute(true)
  }

  return(
    <li className="container itemList">
      <div className="containerTitle">
        <div>
          <h3 className="title">{t('Origem')}</h3>
          <p>{`${route.gps[0].address}`}</p>
        </div>
        <div>
          <h3 className="title">{t('Destino')}</h3>
          <p> {`${route.gps[route.gps.length - 1].address}`}</p>
        </div>
      </div>
      <div className="details">
        <div className="detalsItem">
          <span>{t('Duracao')} {`${formatDuration(route.duration)}`}</span>
          <span>{t('Distancia')} {`${formatDistance(route.distance)}`}</span>
        </div>
        <div className="detalsItem">
          <span>{t('Data de partida')} {`${formatDate(route.start_at)}`}</span>
          <span>{t('Horario de partida')} {`${formatTime(route.start_at)}`}</span>
        </div>
        <div className="detalsItem">
          <span>{t('Data de chegada')} {`${formatDate(route.end_at)}`}</span>
          <span>{t('Horario de chegada')} {`${formatTime(route.end_at)}`}</span>
        </div>
      </div>
      <div className="btnSimulateContainer">
        <button onClick={() => handleSimulateRoute()}>Simular Rota</button>
      </div>
    </li>
  )
}

export default ItemList
