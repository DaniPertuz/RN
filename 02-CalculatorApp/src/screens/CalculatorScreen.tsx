import React from 'react';
import { Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {

    const {
        previousNumber,
        number,
        clean,
        positiveNegative,
        buildNumber,
        deleteButton,
        divideButton,
        multiplyButton,
        substractButton,
        addButton,
        calculate
    } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            {
                (previousNumber === '0') && (
                    <Text style={styles.littleResult}>{previousNumber}</Text>
                )
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.row}>
                <ButtonCalc text="C" color="#9B9B9B" action={clean} />
                <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
                <ButtonCalc text="del" color="#9B9B9B" action={deleteButton} />
                <ButtonCalc text="/" color="#FF9427" action={divideButton} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="7" action={buildNumber} />
                <ButtonCalc text="8" action={buildNumber} />
                <ButtonCalc text="9" action={buildNumber} />
                <ButtonCalc text="X" color="#FF9427" action={multiplyButton} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="4" action={buildNumber} />
                <ButtonCalc text="5" action={buildNumber} />
                <ButtonCalc text="6" action={buildNumber} />
                <ButtonCalc text="-" color="#FF9427" action={substractButton} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="1" action={buildNumber} />
                <ButtonCalc text="2" action={buildNumber} />
                <ButtonCalc text="3" action={buildNumber} />
                <ButtonCalc text="+" color="#FF9427" action={addButton} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="0" action={buildNumber} width />
                <ButtonCalc text="." action={buildNumber} />
                <ButtonCalc text="=" color="#FF9427" action={calculate} />
            </View>
        </View>
    )
}

export default CalculatorScreen;