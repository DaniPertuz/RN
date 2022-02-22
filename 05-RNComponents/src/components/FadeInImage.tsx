import React, { useContext, useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    styling?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, styling }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const { theme } = useContext(ThemeContext);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    color={theme.colors.primary}
                    size={30}
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...styling as any,
                    // width: '100%',
                    // height: 400,
                    opacity
                }}
            />
        </View>
    );
};

export default FadeInImage;