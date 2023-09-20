import {useTranslation} from 'react-i18next'

//Img
import logo from '../../assets/logo.jpg';

//Style
import '../../styles/header.scss';

const Header = () => {

  const {i18n} = useTranslation()

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
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
        <button onClick={()=> handleChangeLanguage('pt')}>PT</button>
        <button onClick={()=> handleChangeLanguage('esp')}>ESP</button>
        <button onClick={()=> handleChangeLanguage('en')}>ING</button>
      </div>
      </div>
    </header>
  );
};

export default Header;
