import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Animated, 
    TouchableOpacity,
    Dimensions 
} from 'react-native';
import { PanGestureHandler, State, Directions } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default function Item(_prProps) {
    let offset = 0;
    const translateX = new Animated.Value(0);

    const animetedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationX: translateX,
                },
            },
        ],
        { useNativeDriver: true },
    );

    function onHandlerStateChange(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationX, velocityX } = event.nativeEvent;

            offset += translationX;

            console.log('event.nativeEvent: ',  event.nativeEvent);
            if (
                translationX < -60 || 
                (!opened && Math.abs(velocityX) > 1200 && translationX < 0)
            ) {
                opened = true;
            } else {
                translateX.setValue(offset);
                translateX.setOffset(0);
                offset = 0;
            }

            let duration = opened
                ? 150
                : Math.abs(velocityX) > 1200
                    ? 150
                    : 300;

            Animated.timing(translateX, {
                toValue: opened ? -150 : 0,
                duration: duration,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? -150 : 0;

                translateX.setOffset(offset);
                translateX.setValue(0);
            });
        }
    }

    return (
        <View key={_prProps.task.id} style={styles.containerItem}>
            <View style={styles.viewUnder}>
                <Text style={styles.emptyContent}></Text>
                <TouchableOpacity style={styles.buttonEdit}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDelete}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
            <PanGestureHandler
                onGestureEvent={animetedEvent}
                onHandlerStateChange={onHandlerStateChange}>
                
                <Animated.View style={{
                    ...styles.viewAbove,
                    transform: [{
                        translateX: translateX.interpolate({
                            inputRange: [-150, 0],
                            outputRange: [-150, 0],
                            extrapolate: 'clamp'
                        }),
                    }],
                }}>
                    <Text style={styles.buttonText}>{_prProps.task.title}</Text>
                </Animated.View>
            </PanGestureHandler>
            <View style={styles.divider} />
        </View> 
    );
}

const styles = StyleSheet.create({
    containerItem: {
        height: 50,
        width: width,
    },
    divider: {
        width: '100%',
        backgroundColor: '#999',
        height: StyleSheet.hairlineWidth
    },
    viewUnder: {
        flex: 1,
        flexDirection: 'row',
    },
    viewAbove: {
        height: 50,
        width: '100%',
        backgroundColor: 'green',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyContent: {
        flex: 1,
    },
    buttonEdit: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    buttonDelete: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
    }
});
