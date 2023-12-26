import React, { useState } from "react";
import Logo from "../images/header/Logo.png";
import "../styles/header.css";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn", isLoggedIn)
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
          {isLoggedIn && (
            <div>
              <Link to="/addBlog">
                <button className="mr-3">დაამატე ბლოგი</button>
              </Link>
              <button onClick={() => setIsLoggedIn(false)}>გამოსვლა</button>
            </div>
          )}
          {!isLoggedIn && <button onClick={openLoginModal}>შესვლა</button>}
        </div>
      </header>

      {isLoginModalOpen && (
        <LoginModal
          visible={isLoginModalOpen}
          onCancel={closeLoginModal}
          loggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default Header;
