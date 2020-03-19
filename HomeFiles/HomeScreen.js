/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MovieCell from './MovieCell';
import { TouchableHighlight } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';


class HomeScreen extends Component
{
state = {
  movieList: [],
  loading: true
}

  componentDidMount()
  {
    console.log ('CDM Home Screen');
    this.makeMovieListRequest();  
  };
 
  makeMovieListRequest = () => {
    this.setState({loading: true});
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjdkZmVlMzcyYjQyZDNiZWRlNWI2MDFmNGIyYjI1MSIsInN1YiI6IjVhZTg5ZDA2OTI1MTQxNDc1MjAwMDUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzivI_L3hTFKUL3T_0aTvXDuwW1egikRZh7q2scZMyw");
    myHeaders.append("Content-Type", "application/json;charset=utf-8");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.themoviedb.org/3/list/1?api_key=976e01968799491aab0415d107b09781", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({
          movieList: result.items,
          loading: false,
        })
      })
      .catch(error => console.log('error', error));
  };

render(){
  return (
    <>
      <SafeAreaView style={styles.listContainer}>
      <FlatList
        data={this.state.movieList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TouchableHighlight 
        onPress={() => this.props.navigation.navigate("Movie Details", {movieId: item.id})}><MovieCell 
        title={item.original_title}
        description={item.overview}
        img_url={'https://image.tmdb.org/t/p/w200/'+ item.poster_path}/></TouchableHighlight>}
        />
      </SafeAreaView> 
    </>
  );
};

}

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  listContainer: {
    flex: 1
  },
});
