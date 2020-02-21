import React from 'react';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  Container,
  Logo,
  BasketView,
  BasketIcon,
  NumberCount,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketView onPress={() => navigation.navigate('Cart')}>
          <BasketIcon />
          <NumberCount>
            <ItemCount>{cartSize}</ItemCount>
          </NumberCount>
        </BasketView>
      </Container>
    </Wrapper>
  );
}
