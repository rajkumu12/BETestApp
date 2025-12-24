import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../../../core/theme/colors';

interface Props {
    currentIndex: number;
}

export default function DotsIndicator({ currentIndex }: Props) {
    // Map 5 slides → 3 dots
    const activeDot =
        currentIndex <= 1 ? 0 : currentIndex <= 3 ? 1 : 2;

    return (
        <View style={styles.container}>
            {[0, 1, 2,3,4].map((i) => (
                <View
                    key={i}
                    style={[
                        styles.dot,
                        activeDot === i && styles.activeDot,
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ffffffff',
        marginHorizontal: 4,
    },
    activeDot: {
        width: 8,
        height: 8,
        backgroundColor: Colors.primary,
    },
});
