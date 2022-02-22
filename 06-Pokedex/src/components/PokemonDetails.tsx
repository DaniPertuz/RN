import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >
            <View style={{
                ...styles.container,
                marginTop: 370
            }}>
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>
            </View>
            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                style={{}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Habilidades</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>
                <View style={{}}>
                    {
                        pokemon.stats.map((stat, i) => (
                            <View
                                key={stat.stat.name + i}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    key={stat.stat.name}
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                >
                                    {stat.stat.name}
                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    regularText: {
        fontSize: 19,
    },
    basicSprite: {
        height: 100,
        width: 100
    }
});

export default PokemonDetails;