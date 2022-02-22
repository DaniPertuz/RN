import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemons } = usePokemonSearch();
    const [criteria, setCriteria] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        if (criteria.length === 0) {
            return setFilteredPokemons([]);
        }

        if (isNaN(Number(criteria))) {
            setFilteredPokemons(
                simplePokemons.filter(
                    (poke) => poke.name.toLocaleLowerCase()
                        .includes(criteria.toLocaleLowerCase()))
            );
        } else {
            const pokemonById = simplePokemons.find(poke => poke.id === criteria);
            setFilteredPokemons(
                (pokemonById) ? [pokemonById] : []
            );
        }
    }, [criteria]);


    if (isFetching) {
        return <Loading />;
    }

    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20
        }}>
            <SearchInput
                onDebounce={setCriteria}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 30
                }}
            />
            <FlatList
                data={filteredPokemons}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                        paddingBottom: 10
                    }}>
                        {criteria}
                    </Text>
                )}
                renderItem={({ item }) => (
                    <PokemonCard
                        pokemon={item}
                    />
                )}
            />
        </View>
    );
};

export default SearchScreen;