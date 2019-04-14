import React from 'react'
import PropTypes from 'prop-types'

const ProductCart = ({ id, price, category, description, inventory, onRemoveFromCartClicked }) => (
    <div>
        {description} - Cat: {category} -  &#36;{price} - inventory {inventory}
        
        <button
            onClick={onRemoveFromCartClicked}>
            Remove from cart
        </button>
    </div>
)

ProductCart.propTypes = {
    id: PropTypes.number,
    price: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    inventory: PropTypes.number,
    onRemoveFromCartClicked: PropTypes.func.isRequired
}

export default ProductCart

