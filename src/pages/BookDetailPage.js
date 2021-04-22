import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Jumbotron, Row, Col, Button, Image } from 'react-bootstrap'

const BookDetailPage = () => {
    const { id } = useParams()
    const [bookdetail, setBookdetail] = useState([])

    useEffect(() => {
        async function fetchBookdetail() {
            const resp = await fetch(`http://localhost:5000/books/${id}`)
            const json = await resp.json()
            console.log({ json })
            setBookdetail(json)
        }
        fetchBookdetail()
    }, [id])
    return (
        <div>
            <Container>
                <Jumbotron className='mt-5'>
                    <Row>
                        <Col lg="4">
                            <Image src={`http://localhost:5000/${bookdetail.imageLink}`} />
                        </Col>
                        <Col lg="8">
                            <div>
                                <h2>{bookdetail.title}</h2>
                            </div>
                            <div>
                                <p>Author: {bookdetail.author}</p>
                                <p>Year: {bookdetail.year}</p>
                                <p>Country: {bookdetail.country}</p>
                                <p>Page: {bookdetail.pages}</p>
                                <p>Language: {bookdetail.language}</p>
                            </div>
                            <Button variant="primary">Add to reading</Button>
                        </Col>

                    </Row>
                </Jumbotron>
            </Container>
        </div >
    )

}

export default BookDetailPage
