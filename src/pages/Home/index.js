import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {formatPrice} from '../../util/format';
import api from '../../services/api';

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

export default class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({products: data});
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
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddButton>
                <ProductAmount>
                  <ButtonIcon />
                  <ButtonCount>1</ButtonCount>
                </ProductAmount>
                <ButtonText>ADICIONAR</ButtonText>
              </AddButton>
            </ProductBox>
          </ProductList>
        )}
      />
    );
  }
}
