import React from 'react'
import { Link } from "react-router-dom";
import {
  PaginationStyle
} from './styled'

export class Pagination extends React.PureComponent {
  render() {
    const {
      postsPerPage,
      totalPosts,
      paginate,
      currentPage
    } = this.props

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
      <PaginationStyle>
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <Link to={`/`}  onClick={() => paginate(number)}>
                        <li key={number} className={number === currentPage  ? "page-item active" : "page-item"}>
                            <div className='page-link'>
                                {number}
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
        </PaginationStyle>
    )
  }
}
