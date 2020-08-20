import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {RenderItems} from '../components/index';
import allProducts from '../datas/products';
import {addBasketItem, deleteBasketItem} from '../store/action';

function categoryPage(props) {
  const {route} = props;
  const {isAll, itemList, product} = route.params;
 
  _renderItems = () => {
    return itemList.map((item) => {
      const itemId = item.itemId;
      const productId = product.productId;
      const uri = item.img;
      console.log("URİ", item.img)
      const count = props.basket.filter(
        (basketItem) =>
          basketItem.itemId === itemId && basketItem.productId === productId,
      ).length;

      return (
        <RenderItems
          key={item.itemId}
          initialItemCount={count}
          uri= {uri}
          addBasketItem={() => props.addBasketItem({productId, ...item})}
          deleteBasketItem={() =>
            props.deleteBasketItem({
              productId,
              itemId,
            })
          }
          name={item.name}
        />
      );
    });
  };
  _renderAllItems = () => {
    return allProducts.map((item) => {
      return (
        <View style={{flex: 1, height: 300}}>
          {item.items.map((values) => {
            const itemId = values.itemId;
            const uri = values.img;
            const productId = item.productId;
            const count = props.basket.filter(
              (basketItem) =>
                basketItem.itemId === itemId &&
                basketItem.productId === productId,
            ).length;

            return (
              <RenderItems
                uri= {uri}
                initialItemCount={count}
                addBasketItem={() =>
                  props.addBasketItem({productId, ...values})
                }
                deleteBasketItem={() =>
                  props.deleteBasketItem({
                    productId,
                    itemId,
                  })
                }
                name={values.name}
              />
            );
          })}
        </View>
      );
    });
  };

  if (!isAll) {
    return (
      <ScrollView style={styles.categoryScroll}>{_renderItems()}</ScrollView>
    );
  }
  if (isAll) {
    return (
      <ScrollView style={styles.categoryScroll}>{_renderAllItems()}</ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({basket: state.basket});
const mapDispatchToProps = {
  addBasketItem,
  deleteBasketItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(categoryPage);

const styles = StyleSheet.create({
  categoryScroll: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },
});
