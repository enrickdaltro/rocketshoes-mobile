import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

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

export default function Cart({ navigation }) {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    ),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <ProductContainer>
      {cart.length ? (
        <>
          <ProductList>
            {cart.map(product => (
              <>
                <ProductHeader key={product.id}>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductInfo>
                  <DeleteBox
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }>
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
