import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationBar = ({ pageNum, setPageNum, totalBooks, fetchBooks }) => {
    const totalPage = Math.ceil(totalBooks / 10);

    const fetchNewPage = (p) => {
        setPageNum();
        fetchBooks();
    }


    return (
        <div>
            <Pagination>
                <Pagination.First onClick={() => fetchNewPage(1)} />
                <Pagination.Prev />
                {pageNum > 1 && (<Pagination.Item onClick={() => fetchNewPage(pageNum - 1)} >
                    {pageNum - 1}
                </Pagination.Item>)}
                <Pagination.Item active onClick={() => fetchNewPage(pageNum)} > {pageNum}</Pagination.Item>
                {pageNum !== totalPage && (<Pagination.Item onClick={() => fetchNewPage(pageNum + 1)} >
                    {pageNum + 1}
                </Pagination.Item>)}
                {pageNum !== totalPage && (<Pagination.Next onClick={() => fetchNewPage(pageNum + 1)} />)}

                {pageNum !== totalPage && (<Pagination.Last onClick={() => fetchNewPage(totalPage)} />)}

            </Pagination>
        </div>
    )
}

export default PaginationBar
