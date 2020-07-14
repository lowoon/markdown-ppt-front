import React from 'react';
import { Link } from 'react-router-dom';

function Header({ token, onClick }) {
  return (
    <>
      <header className="header fixed">
        <div className="logo-area">
          <div className="logo">logo</div>
          <Link to="/">
            <span className="product-name">Zeze - Presentation</span>
          </Link>
        </div>
        <hr className="hr"/>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/my-page" className="normal">
              <span className="nav-word">MyPage</span>
            </Link>
          </li>
          {token ?
            <li className="nav-item">
              <Link to="/" className="logout-btn" onClick={onClick}>
                <span className="nav-word">Log Out</span>
              </Link>
            </li>
            :
            <>
              <li className="nav-item">
                <a
                  href="https://github.com/login/oauth/authorize?client_id=acdc1508017c51604113&redirect_uri=http://localhost:3000/callback&scope=user">
                  <span className="nav-word">Log In</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/sign-up" className="special">
                  <span className="nav-word">Sign Up</span>
                </Link>
              </li>
            </>
          }
        </ul>
      </header>
    </>
  );
}

export default Header;
