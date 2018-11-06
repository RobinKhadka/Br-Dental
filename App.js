import React, { Component } from 'react';
import { Text, Alert, style, Button, ScrollView, ImageBackground, TextInput, View } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            data: []
        }
    }
    // apiServer = () => {
    //     fetch('https://httpbin.org/get', {
    //         method: 'GET'
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({
    //                 data: [{'name': 'Nabin Khadka', 'phone': '9849948051'}, {'name': 'Rabin', 'phone': '9868363311'}]
    //             })
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }
    _onPressButton() {
        //this.props.navigation.navigate('Home')
        if (this.state.username == 'R' && this.state.password == 'R') {
            this.props.navigation.navigate('Home')
        } else {
            Alert.alert('Wrong username or password')

        }

    }
    _onPressButto() {
        //this.props.navigation.navigate('Home')
        {
            this.props.navigation.navigate('About')
        }
    }

    _onPressBackgroundButton() {
        this.props.navigation.navigate('Background')
    }
    _onPressTableButton() {
        this.props.navigation.navigate('Table')
    }



    render() {
        return (



            // <Button title="Go to homescreen"
            //     onPress={() => this.props.navigation.navigate('Home')} />
          
<View>
                    <Text
                        style={{ fontSize: 27 }}>
                        Please provide us your details.
                </Text>
                    <View style={{ margin: 57 }} />
                    <TextInput placeholder='Username' onChangeText={(text) => this.setState({ username: text })} />
                    <View style={{ margin: 17 }} />
                    <TextInput secureTextEntry={true} placeholder='Password' onChangeText={(text) => this.setState({ password: text })} />
                    <View style={{ margin: 27 }} />
                    <Button
                        onPress={() => this._onPressButton()}
                        title="Log In"
                        color="#841584"
                    />
                    <View>
                        <Text></Text>
                    </View>
                    <Button

                        onPress={() => this._onPressButto()}
                        title="About us"
                        color="#841584"
                    />
                    <View>
                        <Text></Text>
                    </View>
                    <Button

                        onPress={() => this._onPressBackgroundButton()}
                        title="Background"
                        color="#841584"
                    />
                    <View>
                        <Text></Text>
                    </View>
                    <Button
                        onPress={() => this.apiServer()}
                        title="Flasksss"
                        color="#841584"
                    />
                    <View>
                        <Text></Text>
                    </View>
                     <Button
                        onPress={() => this._onPressTableButton()}
                        title="Table"
                        color="#841584"
                    />


            
            </View>
        );
    }
}