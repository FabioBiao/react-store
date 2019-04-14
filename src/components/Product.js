import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, category, description, inventory }) => (
  <div>
    {description} - Cat: {category} -  &#36;{price} - inventory {inventory} 
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  inventory: PropTypes.number
}

export default Product
