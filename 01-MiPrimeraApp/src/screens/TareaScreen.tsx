import React from 'react';
import { StyleSheet, View } from 'react-native';

const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
            <View style={styles.blueBox} />
        </View>
    )
}

export default TareaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B'
    },
    purpleBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    blueBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
    purpleBox1: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        position: 'absolute',
        top: 20
    },
    orangeBox1: {
        width: 100,
        height: '75%',
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        position: 'absolute',
        top: 120
    },
    blueBox1: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        position: 'absolute',
        bottom: 20
    },
    container2: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center'
    },
    purpleBox2: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox2: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    blueBox2: {
        width: '100%',
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
    container3: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center'
    },
    purpleBox3: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        position: 'absolute',
        right: 0,
        top: '35%'
    },
    orangeBox3: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    blueBox3: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        position: 'absolute',
        left: '30%',
        top: '55%'
    },
    container4: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center'
    },
    purpleBox4: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        position: 'absolute',
        right: 0,
        top: 20
    },
    orangeBox4: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        alignSelf: 'center'
    },
    blueBox4: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        position: 'absolute',
        left: 0,
        bottom: 20
    },
    container5: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 25
    },
    purpleBox5: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox5: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    blueBox5: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
    container6: {
        flex: 1,
        backgroundColor: '#28425B',
        marginVertical: 30
    },
    purpleBox6: {
        height: '25%',
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox6: {
        height: '25%',
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    blueBox6: {
        height: '50%',
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
    container7: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox7: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox7: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    blueBox7: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
    container8: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox8: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox8: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        left: 100
    },
    blueBox8: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
    container9: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox9: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        top: 100
    },
    orangeBox9: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        left: 100
    },
    blueBox9: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
    container10: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    purpleBox10: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox10: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top: 50
    },
    blueBox10: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
});