import React, { useState } from 'react'
import SingleColor from './component/single-color/single-color.component.jsx'
// import './App.css'

import Values from 'values.js'
import styled, { css } from 'styled-components'

const SectionContainer = styled.section`
    text-align: center;
    display: flex;
    align-items: center;
    height: 100px;
    padding-left: 2rem;
`
const Title = styled.h3`
    margin-bottom: 0;
    margin-right: 2rem;
    @media screen and (max-width: 576px) {
      font-size: 1rem;
    }
  
`
const CustomButton = styled.button`
    background: var(--clr-primary-5);
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-color: transparent;
    border-radius: var(--radius);
    text-transform: capitalize;
    color: var(--clr-white);
    cursor: pointer;
    @media screen and (max-width: 576px) {
        font-size: 0.85rem;
    }
`

const CustomInput = styled.input`
    border-color: transparent;
    padding: 0.5rem 1rem;
    margin: 0 15px 0 0;
    font-size: 1.2rem;
    border-radius: var(--radius);
    

    ${({ error }) => error && css`
    border: 2px solid var(--clr-red-dark);
  `}

    @media screen and (max-width: 576px) {
        font-size: 0.85rem;
    }
`

const SectionColors = styled.section`
    min-height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
`

function App() {
  const [color, setColor] = useState('#ff0021');
  const [error, setError] = useState(false);
  const [interval, setInterval] = useState(5);
  const [list, setList] = useState(new Values("#ff0021").all(interval));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // setInterval(interval);
      let colors = new Values(color).all(parseInt(interval));
      setList(colors)
      setError(false)
      console.log(colors, interval)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <SectionContainer>
        <Title>color generator</Title>
        <form onSubmit={handleSubmit} >
          <CustomInput type="text" error={error} value={color} placeholder="#ff0021"
            onChange={(e) => setColor(e.target.value)} />
          <CustomInput type="number" value={interval} placeholder="interval e.g 5"
            onChange={(e) => setInterval(e.target.value)} />
          <CustomButton type="submit">generate</CustomButton>
        </form>
      </SectionContainer>
      <SectionColors>
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        ))}
      </SectionColors>
    </>
  )
}

export default App
