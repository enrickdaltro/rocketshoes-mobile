import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  ProductList,
  ProductBox,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ButtonIcon,
  ButtonCount,
  ButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getItems() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getItems();
  });

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <FlatList
      horizontal
      data={products}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <ProductList>
          <ProductBox>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddButton onPress={() => handleAddProduct(item.id)}>
              <ProductAmount>
                <ButtonIcon />
                <ButtonCount>{amount[item.id] || 0}</ButtonCount>
              </ProductAmount>
              <ButtonText>ADICIONAR</ButtonText>
            </AddButton>
          </ProductBox>
        </ProductList>
      )}
    />
  );
}
