import { React, useState, useEffect, useCallback } from 'react'
import { Card, Container, Row, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PaginationBar from '../components/PaginationBar'

// const BACKEND_API = process.env.REACT_APP_BACKEND_API;


const HomePage = () => {
    const [pageNum, setPageNum] = useState(1)
    const [querry, setQuerry] = useState(``)
    const [limit] = useState(9)
    const [totalBooks] = useState(100)
    const [books, setBooks] = useState([])


    const fetchBooks = useCallback(async () => {
        let urlParams = `?_page=${pageNum}&_limit=${limit}`
        if (querry !== ``) {
            urlParams = urlParams + `&q=${querry}`
        }

        const resp = await fetch(`http://localhost:5000/books${urlParams}`)
        const json = await resp.json()
        console.log({ json })
        setBooks(json)
    }, [limit, pageNum, querry])

    useEffect(() => {
        fetchBooks()
    }, [fetchBooks])

    const onSearch = (e) => {
        setQuerry(e.target.value)
        fetchBooks()
    }

    return (
        <div>
            <Container className='content'>
                <h1>HomePage</h1>
                <input onChange={onSearch} />
                <PaginationBar pageNum={pageNum} setPageNum={setPageNum} totalBooks={totalBooks} fetchBooks={fetchBooks} />
                <Row>
                    {books.map((b) => {
                        return (
                            <Link as={Link} to={`/books/${b.id}`}>
                                <Card className='m-3' style={{ width: '18rem' }}>
                                    <Card.Img src={`http://localhost:5000/${b.imageLink}`} />
                                    <Card.Body>
                                        <Card.Title>{b.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{b.author}</Card.Subtitle>
                                        <Card.Text>{b.language}</Card.Text>
                                        <Nav.Link as={Link} to={`/books/${b.id}`}>
                                            View
                                    </Nav.Link>
                                    </Card.Body>
                                </Card>
                            </Link>

                        )
                    })}
                </Row>
            </Container>
        </div >
    )
}

export default HomePage
