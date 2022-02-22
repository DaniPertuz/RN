import React, { createContext, useEffect, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import cafeAPI from '../api/cafeAPI';
import { Product, ProductsResponse } from '../interfaces/app-interfaces';

type ProductsContextProps = {
    products: Product[];
    loadProducts: () => Promise<void>;
    loadProductByID: (productID: string) => Promise<Product>;
    addProduct: (categoryID: string, productName: string) => Promise<Product>;
    updateProduct: (categoryID: string, productID: string, productName: string) => Promise<void>;
    deleteProduct: (productID: string) => Promise<void>;
    uploadImage: (data: ImagePickerResponse, id: string) => Promise<void>;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = async () => {
        const resp = await cafeAPI.get<ProductsResponse>('/productos?limite=50');
        setProducts([...resp.data.productos]);
    }

    const loadProductByID = async (productID: string): Promise<Product> => {
        const resp = await cafeAPI.get<Product>(`/productos/${productID}`);
        return resp.data;
    }

    const addProduct = async (categoryID: string, productName: string): Promise<Product> => {
        const resp = await cafeAPI.post<Product>('/productos', {
            nombre: productName,
            categoria: categoryID
        });
        setProducts([...products, resp.data]);

        return resp.data;
    }

    const updateProduct = async (categoryID: string, productID: string, productName: string) => {
        const resp = await cafeAPI.put<Product>(`/productos/${productID}`, {
            nombre: productName,
            categoria: categoryID
        });

        setProducts(products.map(prod => {
            return (prod._id === productID)
                ? resp.data
                : prod;
        }));
    }

    const deleteProduct = async (productID: string) => { }

    const uploadImage = async (data: ImagePickerResponse, id: string) => {

        const fileToUpload = {
            uri: data.assets![0].uri,
            type: data.assets![0].type,
            name: data.assets![0].fileName
        }

        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {
            await fetch(`http://192.168.0.6:8080/api/uploads/productos/${id}`, {
                method: 'PUT',
                body: formData
            });
        } catch (error) {
            console.error({ error });
        }
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                loadProducts,
                loadProductByID,
                addProduct,
                updateProduct,
                deleteProduct,
                uploadImage
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

