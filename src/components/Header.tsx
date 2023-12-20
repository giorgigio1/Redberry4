import Logo from "../images/header/Logo.png";
import "../styles/header.css";
// import s from "../styles/Header.module.css";

const Header = () => {
  return (
    <header
      className="header"
      //  className={s.header}
    >
      <img src={Logo} alt="" />
      <button>შესვლა</button>
    </header>
  );
};

export default Header;
