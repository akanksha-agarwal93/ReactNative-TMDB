import React, { Component } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class MovieDetailsScreen extends Component
{
    state = {
        poster_img: this.props.posterPath,
        title: this.props.title,
        description: this.props.description,
    }

    render(){
        return(
            <>
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
            </>
        );
    }
}

export default MovieDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 10,
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 16,
        color: '#000'
    },
    poster: {

    },
});