import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

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
} from './styles';

function Cart({navigation, cart, removeFromCart, updateAmount}) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <ProductContainer>
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
              <ProductTotal>555</ProductTotal>
            </ProductDetail>
          </>
        ))}
        <ProductFooter>
          <TotalText>TOTAL</TotalText>
          <TotalValue>555</TotalValue>
          <OrderButton>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </OrderButton>
        </ProductFooter>
      </ProductList>
    </ProductContainer>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
