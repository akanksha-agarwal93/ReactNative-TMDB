import React, {Component} from 'react';
import {TextInput, Button, StyleSheet, Text, View} from 'react-native';

import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackActions, NavigationAction} from '@react-navigation/native';
import {setLoginStatus, setUsername} from '../actions/loginActions';
import {UsernameConst, PasswordConst} from '../constants/LoginConstants';

// const resetAction = StackActions.reset({
//     index: 0,
//     actions: [NavigationAction.navigate({ routeName: 'Home' })],
// });

class LoginScreen extends Component {
  state = {
    username: 'Akanksha',
    password: '1234',
  };

  checkStatus() {
    let {isLogin} = this.props;
    console.log(isLogin);
  }

  setLogin() {
    if (
      this.state.username === UsernameConst &&
      this.state.password === PasswordConst
    ) {
      this.props.onLogin(!this.props.isLogin);
      this.props.setUser(this.state.username);

      this.props.navigation.navigate('Home');
    }

    }

  render() {
    const {isLogin} = this.props;
    return (
      <View style={styles.container}>
        {isLogin ?
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 18}}>Welcome back user </Text>
          </View> : (
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 18, color: 'red'}}>
              Enter correct username and password{' '}
            </Text>
          </View>
        )}
        <TextInput
          value={this.state.username}
          style={styles.input}
          placeholder={'Username'}
          onChangeText={username => this.setState({username})}
        />
        <TextInput
          value={this.state.password}
          style={styles.input}
          placeholder={'Password'}
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={this.setLogin.bind(this)}>
          <Text style={styles.textStyle}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={this.checkStatus.bind(this)}>
          <Text style={styles.textStyle}> Check Status </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.loginStatus,
  username: state.login.username,
});

const mapDispatchToProps = dispatch => ({
  onLogin: status => {
    dispatch(setLoginStatus(status));
  },
  setUser: username => {
    dispatch(setUsername(username));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 44,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    marginBottom: 20,
  },
  loginButton: {
    width: 150,
    height: 40,
    backgroundColor: '#008b8b',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
});
