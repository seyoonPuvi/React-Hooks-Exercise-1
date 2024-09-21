// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(to top, #3c2940, #0b0c1e);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
`

export const Image = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
  object-position: center;
`

export const Text = styled.p`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  font-family: Roboto;
`
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: grey;
  border-radius: 10px;
  padding: 1rem 2rem;
  color: black;
`
