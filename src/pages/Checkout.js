import React from 'react';
import PropTypes from 'prop-types';
import getQuantity from '../services/helpers';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.onInputChange = ({ target }) => {
      const { name, value } = target;
      const valueOfInput = value;
      this.setState(
        { [name]: valueOfInput },
      );
    };
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { productList, addedItens } = state;
    const { fullname, email, cpf, phone, cep, address } = this.state;
    return (
      <>
        <div>

          <h2>Revise seus Produtos</h2>
          {productList.map((product) => (
            <>
              <img src={ product.thumbnail } alt="" />
              <p>{`Quantidade: ${getQuantity(addedItens, product.id)}`}</p>
              <p>{`Produto: ${product.title}`}</p>
              <p>{`Preço unitário: ${product.price}`}</p>
            </>
          ))}
        </div>

        <form>
          <h2>informações do Comprador</h2>
          <input
            type="text"
            name="fullname"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            value={ fullname }
            onChange={ this.onInputChange }
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            data-testid="checkout-email"
            value={ email }
            onChange={ this.onInputChange }
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            data-testid="checkout-cpf"
            value={ cpf }
            onChange={ this.onInputChange }
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            data-testid="checkout-phone"
            value={ phone }
            onChange={ this.onInputChange }
          />
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            data-testid="checkout-cep"
            value={ cep }
            onChange={ this.onInputChange }
          />
          <input
            type="text"
            name="address"
            placeholder="Endereço"
            data-testid="checkout-address"
            value={ address }
            onChange={ this.onInputChange }
          />

          <h2>Método de Pagamento</h2>
          <label htmlFor="boleto">
            <input
              type="radio"
              value="boleto"
              name="payment"
              onChange={ this.onInputChange }
            />
            Boleto
          </label>

          <h3>Cartão de Crédito</h3>
          <label htmlFor="visa">
            <input
              type="radio"
              value="visa"
              name="payment"
              onChange={ this.onInputChange }
            />
            Visa
          </label>
          <label htmlFor="masterCard">
            <input
              type="radio"
              value="mastercard"
              name="payment"
              onChange={ this.onInputChange }
            />
            MasterCard
          </label>
          <label htmlFor="elo">
            <input
              type="radio"
              value="elo"
              name="payment"
              onChange={ this.onInputChange }
            />
            Elo
          </label>
        </form>
        <div>
          <button type="submit">Comprar</button>
        </div>
      </>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productList: PropTypes.arrayOf(PropTypes.object).isRequired,
      addedItens: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }).isRequired,
};

export default Checkout;
