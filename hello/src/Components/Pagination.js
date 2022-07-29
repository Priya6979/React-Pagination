import React from 'react'
const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumber=[]

    for(let i=1 ; i<= Math.ceil(totalPosts/postsPerPage) ; i++){
        pageNumber.push(i)
    }
  return (
    <nav>
        <ul className="pagination">
            {pageNumber.map(pagenumber=>(
                <li key={pagenumber} className="page-item">
                    <a onClick={()=> paginate(pagenumber)} href='!#' className="page-link pageno" >{pagenumber}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination;
