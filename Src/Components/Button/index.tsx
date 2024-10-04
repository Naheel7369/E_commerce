import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Style';

const Buttons = ({ Custom, onPress }: { Custom: string; onPress?: () => void }) => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{Custom}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Buttons;

