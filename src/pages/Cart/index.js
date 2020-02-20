import React from 'react';

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

export default function Cart({navigation}) {
  return (
    <ProductContainer>
      <ProductList>
        <ProductHeader>
          <ProductImage />
          <ProductInfo>
            <ProductTitle>Tenis</ProductTitle>
            <ProductPrice>189</ProductPrice>
          </ProductInfo>

          <DeleteProduct />
        </ProductHeader>

        <ProductDetail>
          <DecrementButton />
          <InputAmount />
          <IncrementButton />
          <ProductTotal>555</ProductTotal>
        </ProductDetail>

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
