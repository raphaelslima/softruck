import { useTranslation } from "react-i18next"

//Style
import '../../styles/itemList.scss'

//Interface
import { Course } from "../../interfaces/course"

//Helpers
import {formatDuration} from '../../helpers/formatDuration'

interface PropsItemList{
  route: Course
}

const ItemList = ({route}: PropsItemList)=>{

  const {t} = useTranslation()

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
          <span>{t('Distancia')} {`${route.distance}`}</span>
        </div>
        <div className="detalsItem">
          <span>{t('Data de partida')} {`${route.start_at}`}</span>
          <span>{t('Horario de partida')} {`${route.start_at}`}</span>
        </div>
        <div className="detalsItem">
          <span>{t('Data de chegada')} {`${route.end_at}`}</span>
          <span>{t('Horario de chegada')} {`${route.end_at}`}</span>
        </div>
      </div>
      <div className="btnSimulateContainer">
        <button>Simular Rota</button>
      </div>
    </li>
  )
}

export default ItemList
