import styled from 'styled-components'
// import {
//   default as VARIABLES
// } from '../../themes/styles/variables'
// import {
//   default as TYPOGRAPHYS
// } from '../../themes/styles/variables/typographys'
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const HomeStyled = styled.div`
  /* Parent styles
  ------------------------------- */

  color : #ffffff;


  /* Child element styles
  ------------------------------- */

  .navigation {
    height: 60px;
    background-color : #242526;
    display: flex;
    align-items: center;
    border-bottom: #b3b3b329 solid 1px;
  }

  .btn-icon:hover {
    transition: all 0.5s ease-out;
    background-color: rgb(255 255 255 / 0.2);
  }

  .btn-icon {
    border-radius: 20px;
    width: 40px;
    height: 40px;
    background-color: rgb(255 255 255 / 0.1);
    padding: 0;
    display: flex;
    margin: 0;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    position: fixed;
    right: 0;
    margin-right: 16px;

    >svg{
      font-size: 16px;
    }
  }

  .nav-container {
    height: auto;
    position: absolute;
    width: 360px;
    background: #242526;
    right: 30px;
    top: 56px;
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
    display: flex;
    border-radius: 8px;
    }


  .nav-content {
    padding: 16px 8px;
    width: 100%;
  }

  .nav-row:hover {
    background-color: rgb(255 255 255 / 0.2);
    border-radius: 8px;
    transition: all 0.5s ease-out;
  }

  .nav-row {
    padding-left: 8px;
    padding-right: 8px;
    min-height: 44px;
    position: relative;
  }

  .nav-column {
    display: flex;
    align-items: center;
  }

  .icon {
    border-radius: 20px;
    width: 36px;
    height: 36px;
    background-color: rgb(255 255 255 / 0.1);
    padding: 0;
    display: flex;
    margin: 0;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    margin-right: 12px;
    margin-top: 8px;
    margin-bottom: 8px;


    >svg{
      font-size: 16px;
    }
  }

  .nav-title {
    display: flex;
    align-items: center;
  }


  .nav-title__head {
    display: flex;
    font-size: 30px;
    align-items: center;
  }

  .nav-button {
    display: block;
    justify-content: initial;
    align-items: initial;
    width: initial;
    height: initial;
  }

  .portlet {
    margin-top: 10px;
    display: grid;
  }

  .portlet-head {
    text-align: center;
    margin: 20px 0;
  }

  .portlet-head__title {
    color : #ffffff;
    font-size: 30px;
  }

  .portlet-body {
    margin-top: 15px;
    height: 60px;
    background-color : #242526;
    border-radius: 20px;
    align-items: center;
    display: flex;
    padding: 16px;
  }

  .portlet-body:hover {
    background-color: rgb(255 255 255 / 0.2);
    transition: all 0.5s ease-out;
  }

  .portlet-title {
    color : #ffffff;
    font-size: 20px;
  }

  /* Modifiers
  ------------------------------- */


  /* Media queries
  ------------------------------- */
`
