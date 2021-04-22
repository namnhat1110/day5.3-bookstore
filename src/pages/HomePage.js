import { React, useState, useEffect } from 'react'
import { Card, Container, Row, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const HomePage = () => {
    const [books, setBooks] = useState([1, 2, 3])

    useEffect(() => {
        async function fetchBooks() {
            const resp = await fetch(`http://localhost:5000/books`)
            const json = await resp.json()
            console.log({ json })
            setBooks(json)
        }
        fetchBooks()
    }, [])



    return (
        <div>
            <Container>
                <h1>HomePage</h1>
                <Row>
                    {books && books.map((b) => {
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
