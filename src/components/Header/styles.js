import styled from 'styled-components/native';

import basket from '../../assets/images/shopping_basket_white_24x24.png';

export const Wrapper = styled.SafeAreaView`
  background: #191920;
  flex: 0;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketView = styled.View``;

export const BasketIcon = styled.Image.attrs({
  source: basket,
})``;
