import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState, useEffect, useContext } from "react";
import AnimateHeight from "react-animate-height";
import { NavLink } from 'react-router-dom';
import ResumeCart from "../../../components/Public/Cart/ResumeTotal/ResumeCartView";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import AuthContext from '../../../Contexts/authContext';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [height, setHeight] = useState(90);
  const [toggleMenuMobile, setToggleMMenuMobile] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toogleUl = () => {
    setToggleMMenuMobile(!toggleMenuMobile);
  };


  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const toogleMenu = () => {
    if (height === 90) {
      setHeight(250);
      setTimeout(() => {
        setToggleMMenuMobile(true);
      }, 600);
    } else {
      setHeight(90);
      setToggleMMenuMobile(false);
    }
  };

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity;
    });
    return total;
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (largeur > 622) {
        setHeight(90);
        setToggleMMenuMobile(false);
      }
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [largeur]);

  return (
    <Wrapper>
      <div className=" row d-flex justify-content-center ">

        <div className="divMenu">
          {largeur > 800 && (
            <div className='shopping-cart'>
              <div className="row mt-3">
                <div className="col ">
                  <div className="row">
                    <div className=" col ">
                      <CategoryIcon className="colorIcon" />
                      <NavLink to="/profile" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLink" }}>Categories</NavLink>
                    </div>
                    <div className="col">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="currencyDropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedCurrency}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                          <li>
                            <button className="dropdown-item" onClick={() => handleCurrencyChange('USD')}>
                              USD
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={() => handleCurrencyChange('EUR')}>
                              EUR
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={() => handleCurrencyChange('GBP')}>
                              GBP
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={() => handleCurrencyChange('CAD')}>
                              CAD
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle colorIcon"
                          type="button"
                          id="languageDropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedLanguage}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                          <li>
                            <button className="dropdown-item" onClick={() => handleLanguageChange('English')}>
                              English
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={() => handleLanguageChange('French')}>
                              French
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={() => handleLanguageChange('Spanish')}>
                              Spanish
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={() => handleLanguageChange('German')}>
                              German
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col ">
                  <div className="row ">
                    {user ? (<>
                      <div className=" col">
                        <DashboardCustomizeIcon className="colorIcon" />
                        <NavLink to="/dashboard" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLink" }}>Dashboard</NavLink>
                      </div>
                      <div className=" col">
                        <PeopleAltIcon className="colorIcon" />
                        <NavLink to="/profile" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLink" }}>Profile</NavLink>
                      </div>
                      <div className=" col">
                        <LogoutIcon className="colorIcon" />
                        <button onClick={logout} className="logoutButton">Logout</button>
                      </div>
                    </>
                    ) : (
                      <>
                        <div className=" col">
                          <PersonIcon className="colorIcon" />
                          <NavLink to="/login" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLink" }}>Login</NavLink>
                        </div>
                        <div className=" col">
                          <HowToRegIcon className="colorIcon" />
                          <NavLink to="/register" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLink" }}>Register</NavLink>
                        </div>
                      </>
                    )}
                    <div className="section-sign-card col shopping-cart-container">
                      <ShoppingCart className="colorIcon" onClick={() => navigate('/cart')} />
                      <p>{getTotalQuantity() || 0}</p>
                      <div className="cartVisible">
                        <ResumeCart className="cart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
         
            <div className="col">
              {toggleMenuMobile && largeur < 800 && (
                <ul className="ulListeMobile">
                  {/* <li><NavLink to="/" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Home</NavLink></li> */}
                  <div className=" col">
                    <HomeIcon className="colorIconBlack" />
                    <NavLink to="/" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Home</NavLink>
                  </div>
                  {user ? (
                    <>
                      <div className=" col">
                        <DashboardCustomizeIcon className="colorIconBlack" />
                        <NavLink to="/dashboard" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Dashboard</NavLink>
                      </div>
                      <div className=" col">
                        <PeopleAltIcon className="colorIconBlack" />
                        <NavLink to="/profile" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Profile</NavLink>
                      </div>
                      <div className=" col">
                        <LogoutIcon className="colorIconBlack" />
                        <button onClick={logout} className="logoutButton">Logout</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className=" col">
                        <PersonIcon className="colorIconBlack" />
                        <NavLink to="/login" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Login</NavLink>
                      </div>
                      <div className=" col">
                        <HowToRegIcon className="colorIconBlack" />
                        <NavLink to="/register" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Register</NavLink>
                      </div>
                    </>
                  )}
                </ul>


              )}
         
           
          </div>
       

          <div className="section-sign-card-mobile  mt-4 ">
              <ShoppingCart className="colorIcon" onClick={() => navigate('/cart')} />
              <p>{getTotalQuantity() || 0}</p>
              <div className="cartVisible">
                <ResumeCart className="cart" />
              </div>
            </div>
    
          <AnimateHeight duration={500} height={height}>
            <div className="MenuMobile activeLink" onClick={toogleMenu}>
              <span className="spanMenu">Menu</span>
              <RxHamburgerMenu />
            </div>
          </AnimateHeight>
     
      
        </div>

        <div className=" ulMenu">
          <ul className="ulListe">
            <li><NavLink to="/" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Home</NavLink></li>

            <>
              <li><NavLink to="/Product" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Categories</NavLink></li>
              <li><NavLink to="/categoryView" className={({ isActive }) => { return isActive ? "activeLink" : "noActiveLinkCategory" }}>Register</NavLink></li>
            </>

          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  .separator {
  display: inline-block;
  border-left: 1px solid white;
  height: 150%;
  margin: 0 10px;
  vertical-align: middle; 
}
   .MenuMobile {
     display: none;
   
  }
  .section-sign-card-mobile{
   display: none;

}
  .burgerMenu {
  }
  .ulMenuMobile {
  }
  .ulListeMobile {
    list-style-type: none;
  }
  .ulListe {
    list-style-type: none;
    background: white;
    height: 100px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
    .colorIconBlack { 
    margin-right: 5px;
    margin-bottom: 5px;
    color: black;

  }
  
 .align-cart-quantity{
  display: flex;
  cursor: pointer;
}

  .divMenu {
    background: #262626;
    height: 120px;
    width: 100%;
  }
  .Menu {
    height: 40px;
    display: none;
  }
  
  
  .colorBorder {
    background-color: black;
  }
  .spanMenu {
    padding: 5px;
  }
  .ulMenu {
    width: 100%;
  }
  .activeLink {
    padding: 7px;

    text-decoration:none;
    color: orange;
  }
  .noActiveLink{
    text-decoration:none;
    color: white;
    &:hover {
        color: orange;
      }
  }


  .noActiveLinkCategory{
    text-decoration:none;
    color: black;
    &:hover {
        color: orange;
      }
  }

  ul {
    & li {
      width: 60px;
      margin-right: 20px;
      margin-left: 20px;
     
      margin-bottom: 10px;
      color: #e4ecec;
      cursor: pointer;
   
    }
  }
  .shopping-cart {
  padding: 15px;
  border-radius: 100px;
}

.shopping-cart-container {
  position: relative;
}

.cartVisible {
  visibility: hidden;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.shopping-cart-container:hover .cartVisible {
  visibility: visible;
}
.cart {
  background-color:white;
  position: absolute;
  height:550px;
  top: 50px;
  right: 80px;
  z-index: 1;
  overflow-y: scroll;
}


.colorIcon {
  margin-right: 5px;
  margin-bottom: 5px;
 color: white;
}

.shopping-cart:active {
  box-shadow: 0 4px 4px gray;
}


.section-sign-card{
  display: flex;
  align-items: center;

}
.section-sign-card > p{
  top: 0;
  right: 0;
  background-color: red;
  padding: 0px 6px;
  margin: 5px;
  color: white;
  border-radius: 50px;
}



  @media screen and (max-width: 800px) {
    .burgerMenu {
      display: block;
    }

    .ulListe {
      display: none;
    }

.shopping-cart {

  width:60px;
  left: 150%;
  z-index: 1;
}
    .MenuMobile {
     display: inline-block;
   
  }
 
}
  @media screen and (max-width: 800px) {

  .shopping-cart {
  left: 190%;

}
  .section-sign-card-mobile{
   display: flex;
  align-items: center;
  justify-content: end;
}
  .section-sign-card-mobile > p{
  top: 0;
  right: 0;
  background-color: red;
  padding: 0px 6px;
  margin: 5px;
  color: white;
  border-radius: 50px;
}
  
  }
  .logoutButton {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1em;
  }
    @media screen and (max-width: 800px) {
  .ulListeMobile {
    display: block;
    position: absolute;
    top: 100px;
    left: 0;
    width: 90%; /* Réduit la largeur pour ajouter de l'espace autour */
    background-color: white;
    z-index: 10;
    padding: 20px; /* Ajoute un padding autour du contenu */
    margin: 0 auto; /* Centrer la div */
    border-radius: 15px; /* Arrondir les coins */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ajoute une ombre subtile */
  }

  .Menu {
    position: relative;
    z-index: 20;
  }

  .ulListeMobile li {
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }
}

`;