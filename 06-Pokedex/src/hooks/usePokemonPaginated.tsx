import { useEffect, useRef, useState } from 'react';
import { pokemonAPI } from '../api/pokemonAPI';
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

    const [isLoading, setIsLoading] = useState(true);
    const nextPageUrl = useRef(`https://pokeapi.co/api/v2/pokemon`);

    const [simplePokemons, setSimplePokemons] = useState<SimplePokemon[]>([]);

    const loadPokemons = async () => {
        setIsLoading(true);

        const resp = await pokemonAPI.get<PokemonPaginatedResponse>(nextPageUrl.current);

        nextPageUrl.current = resp.data.next;

        mapPokemonList(resp.data.results);
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, picture, name };
        });

        setSimplePokemons([...simplePokemons, ...newPokemonList]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    return {
        isLoading,
        simplePokemons,
        loadPokemons
    };
}