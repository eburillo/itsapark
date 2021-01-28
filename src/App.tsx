import React from 'react'
import styled from 'styled-components'
import { getDivisiblesByThree } from './utils'

function App() {
  const [firstNumber, setFirstNumber] = React.useState<number>(0)
  const [secondNumber, setSecondNumber] = React.useState<number>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const divisibles = getDivisiblesByThree(firstNumber, secondNumber)
    alert(`The number of divisibles is ${divisibles}`)
  }

  return (
    <Container data-testid='app'>
      <Header>
        <h1>ITSAPARK</h1>
      </Header>
      <Main>
        <Form action='#' onSubmit={(e) => handleSubmit(e)}>
          <Row>
            <Label htmlFor='firstNumber'>First Number</Label>
            <InputNumber
              id='firstNumber'
              data-testid='firstNumber'
              type='number'
              onChange={(e) => setFirstNumber(Number(e.target.value))}
            />
          </Row>
          <Row>
            <Label htmlFor='secondNumber'>Second Number</Label>
            <InputNumber
              id='secondNumber'
              data-testid='secondNumber'
              type='number'
              onChange={(e) => setSecondNumber(Number(e.target.value))}
            />
          </Row>
          <Row>
            <Button data-testid='submitButton' type='submit'>
              Process
            </Button>
          </Row>
        </Form>
      </Main>
      <Footer>
        <p>Created by: Enrique Burillo</p>
      </Footer>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  font-size: 13px;
  font-family: 'Arial';
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`

const Form = styled.form`
  width: 300px;
`

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`

const Label = styled.label`
  text-align: left;
  flex: 1 0 120px;
  font-size: 14px;
`

const InputNumber = styled.input`
  flex: 1 0 120px;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 6px 8px;
`

const Button = styled.button`
  width: 100%;
  text-align: center;
  background-color: black;
  color: #eee;
  border-color: transparent;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  :hover {
    background-color: rgb(245, 98, 78);
    cursor: pointer;
  }
`

const Header = styled.header`
  background-color: rgb(245, 98, 78);
  height: 30vh;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 10rem;
    color: white;
    font-weight: 700;
  }
  @media (max-width: 900px) {
    min-height: 150px;
    h1 {
      font-size: 3rem;
    }
  }
`

const Main = styled.div`
  background-color: rgb(244, 241, 234);
  height: 40vh;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  background-color: rgb(252, 186, 199);
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
`
