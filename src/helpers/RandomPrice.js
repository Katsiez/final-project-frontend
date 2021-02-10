import React from 'react'
import styled from 'styled-components'

export const RandomPrice = () => {
    const precision = 100; // 2 decimals
    const randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision); 
    return <div>{randomnum}€</div>;
  }

  export const Generate = () => {
    const precision = 100;
    return (
      Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision)
    )
  }
  export const RandomNumber = styled.div`
  color: #fe0072;
  font-size: 25px;
  text-align: center;
  letter-spacing: 1.2px; 
  `;