import React, { useState, useEffect } from "react";
import {
  HomeStyled
} from './styled'
import { Container , Button } from "../../components";
import { BsCaretDownFill } from "react-icons/bs";
import { IoMdArrowRoundBack , IoMdFlash } from "react-icons/io";
import { RiSettings3Fill , RiCheckboxBlankCircleFill } from "react-icons/ri";

const HomeContainer = ({ match, ...props }) => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavChange, setIsNavChange] = useState(false);

  return (
    <React.Fragment>
      <HomeStyled className="home">
        <div className="navigation">

          <span>
            <Button onClick={() => {
              setIsNavOpen(!isNavOpen)
          }}>
            <div className="btn-icon"><BsCaretDownFill /></div>
          </Button>
          </span>

          
         
            { isNavOpen && !isNavChange &&
            <div className="nav-container">
              <div className="nav-content">
                <Button className="nav-button">
                <div className="nav-row">
                  <div className="nav-column">
                    <div className="icon"><RiCheckboxBlankCircleFill /></div>
                    <div className="nav-title">Menu Header
                  </div>
                    
                  </div>
                </div>
                </Button>
                <Button className="nav-button" onClick={() => {
                setIsNavChange(!isNavChange)
                }}>
                <div className="nav-row">
                  <div className="nav-column">
                    <div className="icon"><RiSettings3Fill /></div>
                    <div className="nav-title">Clickable Button
                  </div>
                    
                  </div>
                </div>
                </Button>
              
              </div>
            </div>
            }

            { isNavOpen && isNavChange &&
            <div className="nav-container">
              <div className="nav-content">
                <Button className="nav-button" onClick={() => {
                setIsNavChange(!isNavChange)
                }}>
                <div className="nav-row">
                  <div className="nav-column">
                    <div className="icon"><IoMdArrowRoundBack /></div>
                    <div className="nav-title__head">Clickable Back Button
                  </div>
                    
                  </div>
                </div>
                </Button>
                <Button className="nav-button">
                <div className="nav-row">
                  <div className="nav-column">
                    <div className="icon"><IoMdFlash /></div>
                    <div className="nav-title">Item 1
                  </div>
                    
                  </div>
                </div>
                </Button>
                <Button className="nav-button">
                <div className="nav-row">
                  <div className="nav-column">
                    <div className="icon"><IoMdFlash /></div>
                    <div className="nav-title">Item 2
                  </div>
                    
                  </div>
                </div>
                </Button>
                <Button className="nav-button">
                <div className="nav-row">
                  <div className="nav-column">
                    <div className="icon"><IoMdFlash /></div>
                    <div className="nav-title">Item 3
                  </div>
                    
                  </div>
                </div>
                </Button>
                <Button className="nav-button">
                <div className="nav-row">
                  <div className="nav-column">
                    <div className="icon"><IoMdFlash /></div>
                    <div className="nav-title">Item 4
                  </div>
                    
                  </div>
                </div>
                </Button>
              
              </div>
            </div>
            }
            
          
        </div>
          
      </HomeStyled>
    </React.Fragment>
  );
};

export default HomeContainer;
