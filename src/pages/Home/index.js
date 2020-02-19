import React, {Component} from 'react';
import {FlatList} from 'react-native';
import api from '../../services/api';

import {
  ProductList,
  ProductBox,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ButtonIcon,
  ButtonText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
    const response = await api.get('products');

    this.setState({products: response.data});
  }
  render() {
    const {products} = this.state;

    return (
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ProductList>
            <ProductBox>
              <ProductImage source={{uri: item.image}} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
              <AddButton>
                <ButtonIcon />
                <ButtonText>ADICIONAR</ButtonText>
              </AddButton>
            </ProductBox>
          </ProductList>
        )}
      />
    );
  }
}
