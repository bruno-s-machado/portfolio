import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import './App.css'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: 32 }} />
          {' '}Meu Portfolio
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main className="container py-4">
        <h1>Bem vindo</h1>
        <p>Exemplo rápido com React-Bootstrap.</p>
      </main>
    </>
  )
}

export default App
