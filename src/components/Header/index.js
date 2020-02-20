import React from 'react';
import {connect} from 'react-redux';

import {
  Wrapper,
  Container,
  Logo,
  BasketView,
  BasketIcon,
  NumberCount,
  ItemCount,
} from './styles';

function Header({navigation, cartSize}) {
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

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
