import 'react-native-gesture-handler';

import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const HomeScreen = () => {

    const { theme: {colors} } = useContext(ThemeContext);

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={<HeaderTitle title='Opciones del menú' />}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};

export default HomeScreen;
