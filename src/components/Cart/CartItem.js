import React, { useState, useEffect } from "react"
import { cart } from "reducers/cart"
import { NavLink } from 'react-router-dom'

import styled from "styled-components";

export const CartItem = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		const fetchProduct = async () => {
		  try {
			const res = await fetch('http://localhost:8000/cart')
			const json = await res.json()
			setItems(json.cartItems)
		  } catch (err) {
		  }
		}
		fetchProduct()
	  }, [setItems])

	return (
		<CartProduct>
			<ProductImg>
				<ProductInfo>

				</ProductInfo>
			</ProductImg>
		</CartProduct>
	)
}