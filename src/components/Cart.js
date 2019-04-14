import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import ProductsCart from './ProductsCart'
import { removeFromCart } from '../actions'


const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <ProductsCart
        id={product.id}
        description={product.description}
        price={product.price}
        category={product.category}
        inventory={product.inventory}
        key={product.id}
        onRemoveFromCartClicked={() => removeFromCart(product.id)}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
