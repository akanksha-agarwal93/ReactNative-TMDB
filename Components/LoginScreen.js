import React, { Component } from 'react';
import {
    TextInput, 
    Button, 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
} from 'react-native';

class LoginScreen extends Component
{
    state = {
        email: "",
        password: ""
    };

    onLogin()
    {
        const{username, password} = this.state;
        console.log(username);
    }

    render()
    {
        return(
        <View style={styles.container}> 
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
        onPress={this.onLogin.bind(this)}
        />
        </View>
        );
    }
};

export default LoginScreen;

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
