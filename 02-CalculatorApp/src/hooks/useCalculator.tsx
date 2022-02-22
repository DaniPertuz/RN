import { useRef, useState } from 'react';

enum Operators {
    add,
    substract,
    multiply,
    divide
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
    }

    const buildNumber = (textNumber: string) => {
        if (number.includes('.') && textNumber === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (textNumber === '.') {
                setNumber(number + textNumber);
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number);
            }
        } else {
            setNumber(number + textNumber);
        }
    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const deleteButton = () => {
        let negative = '';
        let tempNumber = number;

        if (number.includes('-')) {
            negative = '-';
            tempNumber = number.substr(1);
        }

        if (tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1));
        } else {
            setNumber('0');
        }
    }

    const changeNumberToPrev = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0');
    }

    const divideButton = () => {
        changeNumberToPrev();
        lastOperation.current = Operators.divide;
    }

    const multiplyButton = () => {
        changeNumberToPrev();
        lastOperation.current = Operators.multiply;
    }

    const substractButton = () => {
        changeNumberToPrev();
        lastOperation.current = Operators.substract;
    }

    const addButton = () => {
        changeNumberToPrev();
        lastOperation.current = Operators.add;
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(previousNumber);

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${num1 + num2}`);
                break;
            case Operators.substract:
                setNumber(`${num2 - num1}`);
                break;
            case Operators.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operators.divide:
                setNumber(`${num2 / num1}`);
                break;
        }

        setPreviousNumber('0');
    }

    return {
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
    };
}