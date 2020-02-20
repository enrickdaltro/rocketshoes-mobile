import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FlatList} from 'react-native';
import {formatPrice} from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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

  handleAddProduct = id => {
    const {addToCartRequest} = this.props;

    addToCartRequest(id);
  };

  render() {
    const {products} = this.state;
    const {amount} = this.props;

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
              <AddButton onPress={() => this.handleAddProduct(item.id)}>
                <ProductAmount>
                  <ButtonIcon />
                  <ButtonCount>{amount[item.id] || 0}</ButtonCount>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
