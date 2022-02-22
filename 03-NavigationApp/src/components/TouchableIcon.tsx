import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../theme/appTheme';

interface Props {
    iconName: string
}

const TouchableIcon = ({ iconName }: Props) => {

    const { changeFavoriteIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(iconName)}
        >
            <Icon
                name={iconName}
                size={80}
                color={colors.primary} />
        </TouchableOpacity>
    )
}

export default TouchableIcon;