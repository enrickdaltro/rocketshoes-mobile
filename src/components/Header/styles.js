import styled from 'styled-components/native';

import logo from '../../assets/images/1581084256253-attachment.png';
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
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
  margin-left: 5px;
`;

export const BasketView = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 5px;
`;

export const BasketIcon = styled.Image.attrs({
  source: basket,
})``;

export const NumberCount = styled.View`
  margin-right: 5px;
  position: absolute;
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background: #7159c1;
  top: -8px;
  right: -12px;
  padding: 2px;
  text-align: center;
  overflow: hidden;
`;

export const ItemCount = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 12px;
`;
