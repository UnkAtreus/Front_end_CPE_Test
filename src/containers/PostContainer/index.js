import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PostStyled
} from './styled'
import { Container , Button } from "../../components";
import { CSSTransition } from "react-transition-group";
import { BsCaretDownFill } from "react-icons/bs";
import { IoMdArrowRoundBack , IoMdFlash } from "react-icons/io";
import { RiSettings3Fill , RiCheckboxBlankCircleFill } from "react-icons/ri";
import { postsController } from "apiService";

const PostContainer = ({ match, ...props }) => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavChange, setIsNavChange] = useState(false);
  const [posts , setPosts ] = useState([]);
  

  useEffect(() => {
    GetPosts();
  }, []);

  const GetPosts = async () => {
    const posts_data = await postsController().getPostList(match.params.Id);
    console.log(posts_data);
    setPosts(posts_data);
  };

  return (
    <React.Fragment>
      <PostStyled className="home">
        <div className="navigation">
          <span>
            <Button onClick={() => {
              setIsNavOpen(!isNavOpen)
          }}>
            <div className="btn-icon"><BsCaretDownFill /></div>
          </Button>
          </span>

          
         
            {isNavOpen &&
          <CSSTransition in={isNavChange} timeout={300} classNames="fade" >
            <div className="nav-container">
              <CSSTransition in={!isNavChange} timeout={300} classNames="slide" unmountOnExit >
                <div className="nav-content" >
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
                </CSSTransition>
              
              <CSSTransition in={isNavChange} timeout={300} classNames="slide2" unmountOnExit >
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
                </CSSTransition>
            
          </div>
        
          </CSSTransition>
          }
        </div>

        <Container className="portlet">
          <div className="portlet-head">
            <div className="portlet-head__title">
              { posts.title }
            </div>
          </div>
          <div className="portlet-body">
            <div className="portlet-title">
              {posts.body}
            </div>
          </div>

          <div className="portlet-footer">
            <Link to={`/posts`}>
            <div className="icon "><IoMdArrowRoundBack /></div>
            <div className="portlet-title">
              Back To Home Page
            </div>
            </Link>
          </div>
        </Container>

        
          
      </PostStyled>
    </React.Fragment>
  );
};

export default PostContainer;
