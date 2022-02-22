import React, { useContext, useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();

    const [refreshing, setRefreshing] = useState(false);

    const [data, setData] = useState<string>();

    const { theme } = useContext(ThemeContext);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola Mundo');
        }, 3300);
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={theme.dividerColor}
                    colors={[theme.colors.text]}
                    // style={{ backgroundColor: '#5856D6' }}
                    // tintColor='white'
                    title='Refreshing'
                    titleColor={theme.dark ? 'white' : 'black'}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />
                {data && <HeaderTitle title={data} />}
            </View>
        </ScrollView>
    );
};

export default PullToRefreshScreen;