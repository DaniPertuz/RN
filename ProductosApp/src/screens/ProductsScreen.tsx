import React, { useContext, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigation/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { };

const ProductsScreen = ({ navigation }: Props) => {

  const { products, loadProducts } = useContext(ProductsContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('ProductScreen', {})}
        >
          <Text>Agregar</Text>
        </TouchableOpacity>
      )
    });
  }, []);
  
  const loadProductsFromBackend = async () => {
    setLoading(true);
    await loadProducts();
    setLoading(false);
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10
      }}
    >
      <FlatList
        data={products}
        keyExtractor={(p) => p._id}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={loadProductsFromBackend}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={
              () => navigation.navigate('ProductScreen', {
                id: item._id,
                name: item.nombre
              })
            }
          >
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparator} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  productName: {
    fontSize: 20
  },
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  }
});

export default ProductsScreen;