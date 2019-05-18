import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
    container: {
        height: 50 + getStatusBarHeight(true)
    }
});

export default styles;