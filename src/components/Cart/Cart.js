import React from 'react'
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'

export const Cart = () => {
  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <div>
      <h3>My bag</h3>
      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div>
        <div>Total: {totalPrice}:-</div>
        <button>Go to checkout</button>
      </div>
    </div>
  )
}



// import React from 'react'
// import { useSelector } from 'react-redux'
// import { CartItem } from './CartItem'

// export const Cart = () => {
//   const products = useSelector((store) => store.cart.items)
//   const totalPrice = useSelector((store) => (
//     store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
//   ))

//   return (
//     <div className="cart">
//       <div className="total">
//         <span className="emoji" role="img" aria-label="cart">🛒</span>
//         <div className="amount">Total: {totalPrice}:-</div>
//       </div>

//       <ul className="items">
//         {products.map((product) => (
//           <CartItem key={product.id} product={product} />
//         ))}
//       </ul>
//     </div>
//   )
// }