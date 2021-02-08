import React from 'react'
import styled from 'styled-components/macro'

export const Checkout = () => {
	return (
	  <>
		<HomeSummary>
		  <p>Checkout</p>
		  <p>Not yet available</p>
		</HomeSummary>
	  </>
	)
  }

  const HomeSummary = styled.section`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;