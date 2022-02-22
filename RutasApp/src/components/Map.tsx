import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';

interface Props {
    markers?: Marker[];
}

const Map = ({ markers }: Props) => {

    const [showPolyline, setShowPolyline] = useState(true);

    const { hasLocation, initialPosition, userLocation, routeLines, getCurrentLocation, followUserLocation, stopFollowingUserLocation } = useLocation();

    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();

        return () => {
            stopFollowingUserLocation();
        };
    }, []);

    useEffect(() => {

        if (!following.current) return;

        const { latitude, longitude } = userLocation;

        mapViewRef.current?.animateCamera({
            center: {
                latitude,
                longitude
            }
        });
    }, [userLocation]);

    const centerPosition = async () => {

        const { latitude, longitude } = await getCurrentLocation();

        following.current = true;

        mapViewRef.current?.animateCamera({
            center: {
                latitude,
                longitude
            }
        });
    }

    if (!hasLocation) {
        return <LoadingScreen />
    }

    return (
        <>
            <MapView
                ref={(element => mapViewRef.current = element!)}
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={() => following.current = false}
            >
                {showPolyline &&
                    <Polyline
                        coordinates={routeLines}
                        strokeColor='red'
                        strokeWidth={3}
                    />
                }
                {/* <Marker
                    image={require('../assets/custom-marker.png')}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                    title='Título'
                    description='Descripción'
                /> */}
            </MapView>
            <Fab
                iconName='compass-outline'
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10
                }}
            />
            <Fab
                iconName='brush-outline'
                onPress={() => setShowPolyline(!showPolyline)}
                style={{
                    position: 'absolute',
                    bottom: 80,
                    right: 10
                }}
            />
        </>
    );
};

export default Map;