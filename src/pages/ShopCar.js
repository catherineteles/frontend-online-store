import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { getSavedItens, removeItem } from '../services/saveCart';

class ShopCar extends React.Component {
  render() {
    const addedItens = getSavedItens();
    const productList = [...new Set(addedItens)];
    return (
      <div>
        {addedItens.length === 0 ? (
          <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        )
          : (
            productList.map((product) => (
              <ProductCard
                product={ product }
                key={ product.id }
                onClick={ removeItem }
                buttonText="Remover Produto"
                buttonId=""
                itemId="shopping-cart-product-name"
                showQuantity
                products={ addedItens }
              />))
          )}
        <Link to="/">Voltar</Link>
        <Link
          to={ {
            pathname: '/checkout',
            state: { productList, addedItens } } }
        >
          <button type="submit" data-testid="checkout-products">Finalizar Compra</button>
        </Link>

      </div>
    );
  }
}

export default ShopCar;
