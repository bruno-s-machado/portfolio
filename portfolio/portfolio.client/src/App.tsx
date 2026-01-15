//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import './App.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Container className="headerTexto">
          <Navbar.Brand href="#">
            <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: 32 }} />
            {' '}Meu Portfolio
          </Navbar.Brand>
          </Container>
        <Container className="headerIcones">
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: 32 }} />
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: 32 }} />
        </Container>
      </Navbar>
  )
}

function CardGrid() {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img src={reactLogo} className="card" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}


function App() {
      return (
            <>
                  <NavBar />
                  <main className="container py-4">
                    <h1>Bem vindo</h1>
                    <p>Alguns projetos que já trabalhei:</p>
                    <CardGrid />
                  </main>
            </>
      )
}

export default App
