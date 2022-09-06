import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { productList, addItem } = this.props;
    return (
      <div>
        {productList.length === 0 ? <h2>Nenhum produto foi encontrado</h2>
          : productList.map((product) => (
            <ProductCard
              product={ product }
              key={ product.id }
              onClick={ addItem }
              buttonText="Adicionar Produto"
              buttonId="product-add-to-cart"
              itemId="product"
              showQuantity={ false }
              products={ productList }
            />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ProductList;
