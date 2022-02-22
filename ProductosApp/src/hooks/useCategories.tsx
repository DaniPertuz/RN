import { useEffect, useState } from 'react';
import cafeAPI from '../api/cafeAPI';
import { Category, CategoriesResponse } from '../interfaces/app-interfaces';

const useCategories = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const resp = await cafeAPI.get<CategoriesResponse>('/categorias');
        setCategories(resp.data.categorias);
        setIsLoading(false);
    }

    return {
        isLoading,
        categories
    };
}

export default useCategories;