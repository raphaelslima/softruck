import { useRef } from 'react';
import {useTranslation} from 'react-i18next'

//Img
import logo from '../../assets/logo.jpg';

//Style
import '../../styles/header.scss';

const Header = () => {

  const {i18n} = useTranslation();
  const btnPT = useRef<HTMLButtonElement>(null);
  const btnESP = useRef<HTMLButtonElement>(null);
  const btnEN = useRef<HTMLButtonElement>(null);

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    if(lng === 'pt'){
      if(btnPT.current) btnPT.current.className = 'selected'
      if(btnESP.current) btnESP.current.className = ''
      if(btnEN.current) btnEN.current.className = ''
    }

    if(lng === 'esp'){
      if(btnESP.current) btnESP.current.className = 'selected'
      if(btnPT.current) btnPT.current.className = ''
      if(btnEN.current) btnEN.current.className = ''
    }
    if(lng === 'en'){
      if(btnEN.current) btnEN.current.className = 'selected'
      if(btnPT.current) btnPT.current.className = ''
      if(btnESP.current) btnESP.current.className = ''
    }
  }

  return (
    <header className='header'>
      <div className="headerContainer">
      <div>
        <img
          src={logo}
          alt="Logo Softruck"
          className='logo'
        />
      </div>
      <div className='internationalization'>
        <button ref={btnPT} className='selected' onClick={()=> handleChangeLanguage('pt')}>PT</button>
        <button ref={btnESP} onClick={()=> handleChangeLanguage('esp')}>ESP</button>
        <button ref={btnEN} onClick={()=> handleChangeLanguage('en')}>ING</button>
      </div>
      </div>
    </header>
  );
};

export default Header;
