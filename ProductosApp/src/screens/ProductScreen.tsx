import React, { useContext, useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

import { ProductsStackParams } from '../navigation/ProductsNavigator';
import useCategories from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }

const ProductScreen = ({ navigation, route }: Props) => {

  const { id = '', name = '' } = route.params;

  const [tempURI, setTempURI] = useState<string>();

  const { categories, isLoading } = useCategories();

  const { loadProductByID, addProduct, updateProduct, uploadImage } = useContext(ProductsContext);

  const { _id, categoryID, nombre, img, onChange, setFormValue } = useForm({
    _id: id,
    categoryID: '',
    nombre: name,
    img: ''
  });

  useEffect(() => {
    navigation.setOptions({
      title: (nombre) ? nombre : 'Sin nombre'
    });
  }, [nombre]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) return;

    const product = await loadProductByID(id);
    setFormValue({
      _id: id,
      categoryID: product.categoria._id,
      img: product.img || '',
      nombre
    });
  }

  const saveOrUpdate = () => {
    if (id.length > 0) {
      updateProduct(categoryID, id, nombre);
    } else {
      const temp = categoryID || categories[0]._id;
      addProduct(temp, nombre);
    }
  }

  const takePhoto = () => {
    launchCamera({
      mediaType: 'photo',
      quality: 0.5
    }, (response) => {
      if (response.didCancel) return;

      if (!response.assets![0].uri) return;

      setTempURI(response.assets![0].uri);
      uploadImage(response, _id);
    });
  }

  const takePhotoFromGallery = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5
    }, (response) => {
      if (response.didCancel) return;

      if (!response.assets![0].uri) return;

      setTempURI(response.assets![0].uri);
      uploadImage(response, _id);
    });
  }

  return (
    <View
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.label}>Nombre del producto</Text>
        <TextInput
          placeholder='Producto'
          style={styles.textInput}
          value={nombre}
          onChangeText={(value) => onChange(value, 'nombre')}
        />

        <Text style={styles.label}>Categoría</Text>
        <Picker
          selectedValue={categoryID}
          onValueChange={(itemValue) =>
            onChange(itemValue, 'categoryID')
          }
        >
          {
            categories.map(category => (
              <Picker.Item label={category.nombre} value={category._id} key={category._id} />
            ))
          }
        </Picker>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <Button
            title='Guardar'
            onPress={saveOrUpdate}
            color="#5856D6"
          />
        </View>

        {(_id.length > 0) && 
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Button
              title='Cámara'
              onPress={takePhoto}
              color="#5856D6"
            />
            <View style={{ width: 10 }} />
            <Button
              title='Galería'
              onPress={takePhotoFromGallery}
              color="#5856D6"
            />
          </View>
        }
        {(img.length > 0 && !tempURI) &&
          <Image
            source={{ uri: img }}
            style={{ width: '100%', height: 300, marginTop: 20 }}
          />
        }
        {(tempURI) &&
          <Image
            source={{ uri: tempURI }}
            style={{ width: '100%', height: 300, marginTop: 20 }}
          />
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20
  },
  label: {
    fontSize: 18
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15
  }
});

export default ProductScreen;