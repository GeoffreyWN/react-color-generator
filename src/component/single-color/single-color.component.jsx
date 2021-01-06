import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import './single-color.styles.css'

// const CustomArticle = styled.p`
//     padding: 1rem 2rem;
//     cursor: pointer;
//     font-size: 1rem;
//     text-transform: none;

//     ${({index})=> index > 10 && css`
//         color: var(--clr-white);
//     `}
// `
const PercentValue = styled.p`
    margin-bottom: 0;
    color: var(--clr-grey-1);
`
const ColorValue = styled.p`
    color: var(--clr-grey-1);
    margin-bottom: 0;
`
const Alert = styled.p`
    text-transform: uppercase;
    font-size: 0.85rem;
    margin-top: 0.5rem;
`

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');

  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2500);
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article className={`color ${index > 15 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={() => {setAlert(true); navigator.clipboard.writeText(hexValue)}}>
     <PercentValue  className="percent-value">{weight}%</PercentValue>
     <ColorValue  className="color-value">{hexValue}</ColorValue>
     {alert && <Alert>copied!</Alert>}
    </article>
  )
}

export default SingleColor
