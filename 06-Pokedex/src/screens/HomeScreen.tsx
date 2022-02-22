import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { simplePokemons, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokeballBG}
            />

            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <FlatList
                    data={simplePokemons}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10
                        }}>
                            Pokedex
                        </Text>
                    )}
                    renderItem={({ item }) => (
                        <PokemonCard
                            pokemon={item}
                        />
                    )}

                    // InfiniteScroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={20}
                            color='grey'
                        />
                    )}
                />
            </View>
        </>
    );
};

export default HomeScreen;