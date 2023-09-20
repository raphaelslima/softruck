import logo from '../../assets/logo.jpg';
import '../../styles/header.scss';
const Header = () => {
  return (
    <header className='header'>
      <div>
        <img
          src={logo}
          alt="Logo Softruck"
          className='logo'
        />
      </div>
      <div className='internationalization'>
        <button>PT</button>
        <button>ESP</button>
        <button>ING</button>
      </div>
    </header>
  );
};

export default Header;
