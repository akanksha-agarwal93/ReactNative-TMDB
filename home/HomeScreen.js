/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TouchableHighlight} from 'react-native-gesture-handler';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import { useNavigation } from '@react-navigation/native';

import MovieCell from './MovieCell';
import {fetchMovies} from '../apiData/MovieAPIs';
import {
  getMovies,
  getMoviesPending,
  getMoviesError,
} from '../reducers/MovieReducer';
// import {fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError} from '../actions/MovieActions';

class HomeScreen extends Component {
  state = {
    movieList: [],
    loading: true,
  };

  componentDidMount() {
    const {fetchMovies} = this.props;
    fetchMovies();
  }

  makeMovieListRequest = () => {
    this.setState({loading: true});
    fetch('https://api.themoviedb.org/3/list/1?api_key=976e01968799491aab0415d107b09781')
      .then(response => response.json())
      .then(result => {
        this.setState({
          movieList: result.items,
          loading: false,
        });
      })
      .catch(error => console.log('error', error));
  };

  render() {
    const {movieList} = this.props;

    console.log('render called.');
    console.log(this.props);
    return (
      <>
        <SafeAreaView style={styles.listContainer}>
          <View>
            <Text style={styles.sectionTitle}>
              Welcome {this.props.username}
            </Text>
          </View>
          <FlatList
            data={movieList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate('Movie Details', {
                    movieId: item.id,
                  })
                }>
                <MovieCell
                  title={item.original_title}
                  description={item.overview}
                  img_url={
                    'https://image.tmdb.org/t/p/w200/' + item.poster_path
                  }
                />
              </TouchableHighlight>
            )}
          />
        </SafeAreaView>
      </>
    );
  }
}
const mapStateToProps = state => ({
  username: state.login.username,
  // updatedMovieList : state.movie.movies,
  movieError: getMoviesError(state),
  movieList: getMovies(state),
  pending: getMoviesPending(state),
});

const id = 3;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies: fetchMovies,
    },
    dispatch,
  );
// const mapDispatchToProps = dispatch => ({
//   movieErrorAction : () => {
//       dispatch(fetchMoviesError());
//   },
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

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
    marginLeft: 10,
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
    flex: 1,
  },
});
