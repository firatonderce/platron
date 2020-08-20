import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import RenderCategories from '../components/renderCategories';
import products from '../datas/products';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class home extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      navigation
    }
  }
  _renderCategories(navigation) {
    return products.map(product => {
      return (
        <View
          style={{marginLeft:'3%'}}
          key={product.productId}>
          <RenderCategories
            product={product}
            nav={navigation}
          />
          <View style={{}}>
          <Text style={styles.categoryName}>{product.name}</Text>    
          </View>
        </View>
      );
    });
  }

  render() {
    const { navigation } = this.state;
    return (
      <View style={{ flex: 1,justifyContent: 'space-around' }}>
        <View style={{ flex: 8 }}>
          <ScrollView >
            <View style={styles.categoryView}>
              {this._renderCategories(navigation)}
            </View>
          </ScrollView>
        </View>
        <View style={styles.allItemsButtonView}>
          <TouchableOpacity
            style={styles.allItemsButton}
            onPress={() => navigation.navigate('categoryPage', { isAll: true })}>
            <Text style={{ color: 'white' }}>Tüm Ürünler</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  categoryView: {
    paddingTop: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex:1
  },
  categoryName: {
    textAlign: 'center',
    flex: 1,
  },
  allItemsButtonView: {
    paddingTop: '10%',
    alignItems: 'center',
    flex: 1,

  },
  allItemsButton: {
    borderWidth: 1,
    backgroundColor: '#61A5EA',
    width: 300,
    alignItems: 'center'
  }
});
export default home;
