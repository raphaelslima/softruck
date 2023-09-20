import { useTranslation } from "react-i18next"
import {useState} from 'react'

//Style
import '../../styles/selectRoute.scss'

//icons
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

//Components
import ItemList from "../ItemList"

const SelectRoute = ()=>{

  const {t} = useTranslation()
  const [showSelectRoute, setShowSelectRoute] = useState(true)

  return(
    <div className="container">
      {
        showSelectRoute ? (
          <div className="containerBtnSelect">
            <button className="btnSelectRoute" onClick={()=> setShowSelectRoute(false)}>
              <FaMapMarkerAlt color='#ff0000' />
              {t('Selecione trajeto')}
            </button>
      </div>
        ) : (
          <div className="listRoutes">
            <div className="headerListRoutes">
              <h2 className="titleRoutes">{t('Trajetos')}</h2>
              <button className="iconClose" onClick={()=> setShowSelectRoute(true)}>
                <AiFillCloseCircle color='ff0000'/>
              </button>
            </div>
            <ul className="container">
              <ItemList/>
              <ItemList/>
              <ItemList/>
              <ItemList/>
              <ItemList/>
            </ul>
          </div>
        )
      }

    </div>
  )
}

export default SelectRoute
