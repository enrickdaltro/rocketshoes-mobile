import React from 'react';
import {connect} from 'react-redux';

import {
  ProductContainer,
  ProductList,
  ProductHeader,
  ProductInfo,
  ProductImage,
  ProductTitle,
  ProductPrice,
  DeleteProduct,
  ProductDetail,
  DecrementButton,
  InputAmount,
  IncrementButton,
  ProductTotal,
  ProductFooter,
  TotalText,
  TotalValue,
  OrderButton,
  OrderText,
} from './styles';

function Cart({navigation, cart}) {
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
              <DeleteProduct />
            </ProductHeader>

            <ProductDetail>
              <DecrementButton />
              <InputAmount value={String(product.amount)} />
              <IncrementButton />
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

export default connect(mapStateToProps)(Cart);
