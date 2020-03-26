import React from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#FFF'
    },

    title: {
        fontSize: 16,
        color: '#000'
    },

    containerText: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center'
    },
    photo: {
        height: 100,
        width: 70
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic'
    },
});

const MovieCell = ({title, description, img_url}) => (
    <View style={styles.container}>
        <Image source={{uri: img_url}} style={styles.photo}/>
        <View style={styles.containerText}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>
        </View>
);

export default MovieCell;
