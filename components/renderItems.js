import React, {Component, useState, useEffect} from 'react';
import {
  Alert,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function RenderItems(props) {
  const {name, initialItemCount, count = initialItemCount} = props;
  const {uri} = props;
  const [itemCount, setItemCount] = useState(initialItemCount);
  console.log(name, itemCount);

  useEffect(() => {
    setItemCount(count);
  }, [count]);

  const addBasketItem = () => {
    props.addBasketItem();
    setItemCount(itemCount + 1);
  };

  const deleteBasketItem = () => {
    props.deleteBasketItem();
    setItemCount(itemCount - 1);
  };

  if (itemCount === 0) {
    return (
      <View style={styles.outerView}>
        <Image
          style={styles.image}
          source={uri}
        />
        <Text style={styles.itemText}>{name}</Text>
        <View style={styles.counterView}>
          <View style={styles.minus}>
            <View style={styles.categoryPlusMinus} />
          </View>
          <Text style={styles.counter}>{itemCount}</Text>
          <View style={styles.plus}>
            <TouchableOpacity
              style={styles.categoryPlusMinus}
              onPress={addBasketItem}>
              <Text style={styles.categoryPlusMinusText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  if (itemCount > 0) {
    return (
      <View style={styles.outerView}>
        <Image
          style={styles.image}
          source={uri}
        />
        <Text style={styles.itemText}>{name}</Text>
        <View style={styles.counterView}>
          <View style={styles.minus}>
            {itemCount > 0 && (
              <TouchableOpacity
                style={styles.categoryPlusMinus}
                onPress={deleteBasketItem}>
                <Text style={styles.categoryPlusMinusText}>-</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.counter}>{itemCount}</Text>
          <View style={styles.plus}>
            <TouchableOpacity
              style={styles.categoryPlusMinus}
              onPress={addBasketItem}>
              <Text style={styles.categoryPlusMinusText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default RenderItems;
const styles = StyleSheet.create({
  categoryPlusMinus: {
    borderRadius: 25,
    borderWidth: 3,
    //borderColor: 'grey',
    paddingLeft: 10,
  },
  minus: {
    borderColor: 'white',
    borderWidth: 1,
    
  },
  plus: {
    borderColor: 'black',
    borderWidth: 0,
    marginLeft: '10%',
  },
  counter: {
    marginLeft: '10%',
  },
  categoryPlusMinusText: {
    //fontSize: 30,
  },
  outerView: {
    marginBottom: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#a0cdd3',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterView: {
    borderColor: '#a0cdd3',
    marginLeft: '15%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flex:1
  },
  image: {
    marginLeft: '5%',
    width: '20%',
    height: '80%',
    borderWidth: 1,
    borderRadius: 40,
  },
  itemText: {
    fontSize: 20,
    paddingLeft: '2%',
    marginLeft: '4%',
    flex:1,
    //fontWeight: 'bold',
    //color:"white",
  },
});
