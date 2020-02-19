import React from 'react';

import {Wrapper, Container, Logo, BasketView, BasketIcon} from './styles';

export default function Header({navigation}) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketView>
          <BasketIcon />
        </BasketView>
      </Container>
    </Wrapper>
  );
}
