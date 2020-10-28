import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/variables'

// Wrapper
// ============================================================
export const PaginationStyle = styled.div`
  /* Parent styles
  ------------------------------- */

  /* Child element styles
  ------------------------------- */
  .pagination {
    display: flex;
    margin-top: 15px;
  }

  .page-item {
    width: 40px;
    background: #242526;
    border-radius: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 6px;

    &.active {
      border: #70707091 solid 2px
    }
  }

  .page-item:hover {
    background-color: rgb(255 255 255 / 0.2);
    transition: all 0.5s ease-out;
  }


  .page-link {
    color : #ffffff;
  }

  /* Modifiers
  ------------------------------- */

  /* Modifiers for single UI
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`
