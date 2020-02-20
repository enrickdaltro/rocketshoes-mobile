import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import {formatPrice} from '../../util/format';

import {
  ProductContainer,
  ProductList,
  ProductHeader,
  ProductInfo,
  ProductImage,
  ProductTitle,
  ProductPrice,
  DeleteBox,
  DeleteProduct,
  ProductDetail,
  Decrement,
  DecrementButton,
  InputAmount,
  Increment,
  IncrementButton,
  ProductTotal,
  ProductFooter,
  TotalText,
  TotalValue,
  OrderButton,
  OrderText,
  EmptyCart,
  EmptyIcon,
  EmptyText,
  OrderButtonEmpty,
  OrderTextEmpty,
} from './styles';

function Cart({navigation, cart, total, removeFromCart, updateAmountRequest}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  return (
    <ProductContainer>
      {cart.length ? (
        <>
          <ProductList>
            {cart.map(product => (
              <>
                <ProductHeader key={product.id}>
                  <ProductImage source={{uri: product.image}} />
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductInfo>
                  <DeleteBox onPress={() => removeFromCart(product.id)}>
                    <DeleteProduct />
                  </DeleteBox>
                </ProductHeader>

                <ProductDetail>
                  <Decrement onPress={() => decrement(product)}>
                    <DecrementButton />
                  </Decrement>
                  <InputAmount value={String(product.amount)} />
                  <Increment onPress={() => increment(product)}>
                    <IncrementButton />
                  </Increment>
                  <ProductTotal>{product.subtotal}</ProductTotal>
                </ProductDetail>
              </>
            ))}
            <ProductFooter>
              <TotalText>TOTAL</TotalText>
              <TotalValue>{total}</TotalValue>
              <OrderButton>
                <OrderText>FINALIZAR PEDIDO</OrderText>
              </OrderButton>
            </ProductFooter>
          </ProductList>
        </>
      ) : (
        <EmptyCart>
          <EmptyIcon />
          <EmptyText>Seu Carrinho está vazio.</EmptyText>
          <OrderButtonEmpty onPress={() => navigation.navigate('Home')}>
            <OrderTextEmpty>VOLTAR PARA COMPRAS</OrderTextEmpty>
          </OrderButtonEmpty>
        </EmptyCart>
      )}
    </ProductContainer>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
