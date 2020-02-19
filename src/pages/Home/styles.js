import styled from 'styled-components/native';
import {darken} from 'polished';

export const ProductList = styled.View`
  flex: 1;
  background: #191920;
`;

export const ProductBox = styled.View`
  width: 220px;
  height: 358px;
  background: #fff;
  padding: 10px;
  margin: 20px;
  border-radius: 4px;
  align-items: center;
`;
export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  height: 42px;
  width: 186px;
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
`;
export const ProductPrice = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-top: 5px;
`;
export const AddButton = styled.View`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  height: 42px;
  width: 200px;
  margin-top: 10px;
`;
export const ButtonIcon = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  flex-direction: row;
  align-items: center;
`;
export const ButtonText = styled.Text``;
