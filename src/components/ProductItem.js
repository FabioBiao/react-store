import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      description={product.description}
      price={product.price}
      category={product.category}
      inventory={product.inventory}
    />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
