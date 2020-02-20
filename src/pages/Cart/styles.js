import styled from 'styled-components/native';

import deleteCan from '../../assets/images/delete_forever_black_24x24.png';
import addCircle from '../../assets/images/add_circle_outline_black_18x18.png';
import removeCircle from '../../assets/images/remove_circle_outline_black_18x18.png';

export const ProductContainer = styled.View`
  flex: 1;
  background: #191920;
`;
export const ProductList = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const ProductHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;
export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  margin-top: 20px;
  margin-left: 10px;
`;
export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const DeleteBox = styled.TouchableOpacity``;

export const DeleteProduct = styled.Image.attrs({
  source: deleteCan,
})`
  margin: 5px;
`;

export const ProductDetail = styled.View`
  flex-direction: row;
  background: #eeeeee;
  margin: 5px 10px;
  height: 40px;
  border-radius: 4px;
`;

export const Decrement = styled.TouchableOpacity``;

export const DecrementButton = styled.Image.attrs({
  source: removeCircle,
})`
  margin-left: 10px;
  margin-top: 11px;
`;

export const InputAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  margin-left: 10px;
  margin-top: 5px;
  height: 30px;
  border-radius: 4px;
  min-width: 52px;
  padding: 5px;
`;

export const Increment = styled.TouchableOpacity``;

export const IncrementButton = styled.Image.attrs({
  source: addCircle,
})`
  margin-left: 10px;
  margin-top: 11px;
`;
export const ProductTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
  margin-right: 10px;
  margin-top: 10px;
`;
export const ProductFooter = styled.View`
  margin-top: 30px;
`;
export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;
export const TotalValue = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 25px;
  font-size: 32px;
  font-weight: bold;
`;
export const OrderButton = styled.TouchableOpacity`
  background: #7159c1;
  padding: 14px;
  border-radius: 4px;
  margin: 0px 10px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
