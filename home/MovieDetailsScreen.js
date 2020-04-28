import React, { Component } from 'react';
import {Text, Image, View, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class MovieDetailsScreen extends Component
{
    state = {
        poster_img: null,
        title: null,
        description: null,
    }

    constructor(props){
        super(props);       
    }
    
    componentDidMount() {
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const {navigation, route} = this.props;
        //const movieId = //navigation("movieId", "-1")
      console.log(route.params.movieId);
      var apirequest = "https://api.themoviedb.org/3/movie/" + route.params.movieId + "?api_key=867dfee372b42d3bede5b601f4b2b251"; 
      console.log('API: ', apirequest) 
      fetch(apirequest, 
        requestOptions)
        .then(response => response.json())
        .then(result =>{
            console.log(result)
            this.setState({
                poster_img: 'https://image.tmdb.org/t/p/w500'+ result.poster_path,
                title: result.original_title,
                description: result.overview
            })
        } )
        .catch(error => console.log('error', error));
    } 

    render(){
        console.log(this.state.title)
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView} scrollEnabled={true} showsVerticalScrollIndicator={false}>
            <Image source={{uri: this.state.poster_img}} style={styles.poster}/>
            
                <Text style={styles.title}>
                    {this.state.title}
                </Text>
                <Text style={styles.description}>
                   {this.state.description}
                </Text>
                </ScrollView>
                </SafeAreaView>
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
    scrollView:{
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        paddingVertical: 15,
        fontWeight: "bold",
        color: '#000',

    },
    poster: {
        height: 700,
        width: '100%'
    },
    description: {
        fontSize: 16,
        textAlign: "justify"
    }
});