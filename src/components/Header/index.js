import React from 'react';

import {
  Wrapper,
  Container,
  Logo,
  BasketView,
  BasketIcon,
  NumberCount,
  ItemCount,
} from './styles';

export default function Header({navigation}) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketView onPress={() => navigation.navigate('Cart')}>
          <BasketIcon />
          <NumberCount>
            <ItemCount>1</ItemCount>
          </NumberCount>
        </BasketView>
      </Container>
    </Wrapper>
  );
}
