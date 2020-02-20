import React, {Component} from 'react';
import {connect} from 'react-redux';
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

class Home extends Component {
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

  handleAddProduct = product => {
    const {dispatch} = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

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
              <AddButton onPress={() => this.handleAddProduct(item)}>
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

export default connect()(Home);
