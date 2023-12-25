import React, { useState } from "react";
import Logo from "../images/header/Logo.png";
import "../styles/header.css";
import LoginModal from "./LoginModal";

const Header: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header2">
          <img src={Logo} alt="" />
          <button onClick={openLoginModal}>შესვლა</button>
        </div>
      </header>

      {isLoginModalOpen && <LoginModal visible={isLoginModalOpen} onCancel={closeLoginModal} />}
    </>
  );
};

export default Header;
