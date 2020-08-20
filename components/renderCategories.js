import React, {Component} from 'react';
import {
  useState,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class RenderCategories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {product, nav} = this.props;
    const itemList = product.items;
    const uri = product.img;
    const isAll = false;
    return (
      <View>
        <TouchableOpacity
          style={styles.square}
          onPress={() => nav.navigate('categoryPage', {itemList , product, isAll})}>
           <Image
            style={styles.image}
            source={uri}
           />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  square: {
    height: 100,
   marginLeft: '15%',
   marginRight: '15%',
   marginBottom: '10%',
  // padding: 11,
    borderWidth: 1,
    marginTop: '10%',
    borderColor: '#a0cdd3',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
 
  },
});
