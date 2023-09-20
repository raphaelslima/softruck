import { useTranslation } from "react-i18next"

//Style
import '../../styles/itemList.scss'

const ItemList = ()=>{

  const {t} = useTranslation()

  return(
    <li className="container itemList">
      <div>
        <h3 className="title">{t('Origem')} Bh</h3>
        <h3 className="title">{t('Destino')} Betim</h3>
      </div>
      <div className="details">
        <span>{t('Duracao')} 30min</span>
        <span>{t('Distancia')} 10 KM</span>
        <span>{t('Data de partida')} 20 de Setembro</span>
        <span>{t('Horario de partida')} 14:25</span>
        <span>{t('Data de chegada')} 20 de Setembro</span>
        <span>{t('Horario de chegada')} 15:23</span>
      </div>
      <div className="btnSimulateContainer">
        <button>Simular Rota</button>
      </div>
    </li>
  )
}

export default ItemList
