import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getQuantity from '../services/helpers';

class ProductCard extends React.Component {
  quantitySubtraction = () => {
    const { products, product } = this.props;
    const checkId = (element) => element.id === product.id;
    const quantityParagraph = document.querySelector(`#${product.id}`);
    const itemIdexPosition = products.findIndex(checkId);
    const quantity = parseFloat(quantityParagraph.innerHTML);
    if (quantity > 1) {
      products.splice(itemIdexPosition, 1);
    }
    const quantityProduct = getQuantity(products, product.id);
    quantityParagraph.innerHTML = quantityProduct;
  };

  quantitySum = () => {
    const { products, product } = this.props;
    products.push(product);
    const quantityParagraph = document.querySelector(`#${product.id}`);
    const quantityProduct = getQuantity(products, product.id);
    quantityParagraph.innerHTML = quantityProduct;
  }

  render() {
    const { product, onClick,
      buttonText,
      buttonId, itemId, products, showQuantity } = this.props;
    return (
      <section data-testid={ itemId }>
        <h1>{ product.title }</h1>
        <p>{ product.price }</p>
        {showQuantity && (
          <div>
            <input
              type="button"
              id="subtraction"
              data-testid="product-decrease-quantity"
              onClick={ this.quantitySubtraction }
              value="-"
            />
            <p id={ product.id } data-testid="shopping-cart-product-quantity">
              {this.getQuantity(products, product.id)}
            </p>
            <input
              type="button"
              id="sum"
              data-testid="product-increase-quantity"
              onClick={ this.quantitySum }
              value="+"
            />
          </div>
        )}
        <button
          type="button"
          data-testid={ buttonId }
          onClick={ () => onClick(product) }
        >
          {buttonText}
        </button>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/productDetail',
            state: product } }
        >
          <img
            src={ product.thumbnail }
            alt=""
          />
        </Link>

      </section>);
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  showQuantity: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  // addedItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
