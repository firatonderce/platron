import lodash from 'lodash';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { RenderItems } from '../components/index';
import { addBasketItem, deleteBasketItem, removeBasket } from '../store/action';
import firestore from '@react-native-firebase/firestore';

function basket(props) {

  const { basket = [], login, navigation } = props;
  var a = 0;
  const empty = basket.length === 0;

  const _buyItems = () => {
    if (login) {
      props.removeBasket();
      navigation.navigate('complete');

    }
    else (
      Alert.alert('İşlemi tamamlamak için oturum açmanız gerekmektedir,'),
      navigation.navigate('login')
    )
  }

  const _renderItems = () => {
    let temp = lodash.groupBy(basket, (basketItem) => [
      basketItem?.productId,
      basketItem?.itemId,
    ]);
    temp = lodash.values(temp);
    console.log('Temp=', temp);
    return temp.map((item) => {
      const count = item.length;
      const [firstItem = {}] = item;
      const price = count * firstItem.price;
      console.log('Price=', price);
      a = a + price;
      console.log('Count=', count);
      const name = firstItem.name;
      const itemId = firstItem.itemId;
      const uri = firstItem.img;
      console.log('Firstitem uri =', uri)
      const productId = firstItem.productId;

      return (
        <RenderItems
          count={count}
          uri={uri}
          initialItemCount={count}
          name={name}
          addBasketItem={() => props.addBasketItem(firstItem)}
          deleteBasketItem={() =>
            props.deleteBasketItem({
              productId,
              itemId,
            })
          }
        />
      );
    });
  };

  return (
    <ScrollView style={styles.listScroll}>
       {_renderItems()}
      {empty && (
        <View style={styles.productUndefined}>
          <Text>Sepetinizde ürün yok!</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.touchable}>Ürün ekle</Text>
          </TouchableOpacity>
        </View>
      )}
      {!empty && (
        <View style={styles.allItemsButtonView}>

          <View style={styles.costView}>
            <View style={{flex:1,marginLeft:'4%'}}>
            <Text style={styles.Toplam}>Toplam:</Text>
            </View>
            <View style={{flex:1,marginRight: '3%'}}>
            <Text style={styles.cost}> {a}₺</Text>
            </View>
          </View>
          
          <View style= {{alignItems:'center'}}>
          <TouchableOpacity
            style={styles.allItemsButton}
            onPress={() => _buyItems()}>
            <Text style={{ color: 'white' }}>Siparişi Tamamla</Text>
          </TouchableOpacity>
          </View>
        </View>

      )}
    </ScrollView>
  );
}

const mapStateToProps = (state) => ({ basket: state.basket, login: state.login });
const mapDispatchToProps = {
  addBasketItem,
  deleteBasketItem,
  removeBasket
};
export default connect(mapStateToProps, mapDispatchToProps)(basket);

const styles = StyleSheet.create({
  deneme: {
    marginTop: 30,
    paddingTop: 30,
  },
  listScroll: {
    paddingTop: '10%',
  },
  touchable: {
    color: '#0c71a7',
    fontWeight: 'bold',
  },
  Toplam: {
    fontSize: 25,
    marginLeft: '6%'
  },
  cost: {
    fontSize: 25,
    marginLeft: '50%'
    //fontFamily:
  },
  productUndefined: {
    borderColor: '#a0cdd3',
    borderWidth: 3,
    marginTop: '55%',
    marginLeft: '33%',
    marginRight: '33%',
    flexDirection: 'column',
    alignItems:'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  costView: {
    flex: 1,
    flexDirection: 'row',
  },
  allItemsButtonView: {
    paddingTop: '10%',
    flex: 1,
  },
  allItemsButton: {
    marginTop: '5%',
    borderWidth: 1,
    backgroundColor: '#61A5EA',
    width: 300,
    alignItems: 'center',
  }
});
