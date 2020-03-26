import React, { Component } from 'react';
import {
    TextInput, 
    Button, 
    StyleSheet, 
    Text, 
    View
} from 'react-native';

import {connect} from 'react-redux';

import {setLoginStatus} from '../actions/loginActions'

class LoginScreen extends Component
{
    state = {
        username: "",
        password: ""
    };

    checkStatus()
    {
        let {isLogin} = this.props;
        console.log(isLogin);
    }
    
    setLogin()
    {
        console.log("Method login")
        this.props.onLogin(!this.props.isLogin)
        
    }

    render()
    {
        const {isUserLoggedIn} = this.props;
        return(
        <View style={styles.container}> 
        {isUserLoggedIn ? 
        <View >
            <Text>Welcome back user </Text>
        </View> : null }
        <TextInput
        value={this.state.email}
        style={styles.input}
        placeholder={`Username`}
        onChangeText={(username) => this.setState({username})}
        />
        <TextInput
        value={this.state.password}
        style={styles.input}
        placeholder={`Password`}
        onChangeText={(password) => this.setState({password})}
        secureTextEntry={true}
        />
        <Button
        title={'Login'}
        onPress={this.setLogin.bind(this)}
        />
         <Button
        title={'Check Status'}
        onPress={this.checkStatus.bind(this)}
        />
        </View>
        );
    }
};

const mapStateToProps = state => ({
    isLogin : state.login.loginStatus,
});

const mapDispatchToProps = dispatch => ({
    onLogin : (status) => {
        dispatch(setLoginStatus(status));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
        color: 'blue'
    }
});
