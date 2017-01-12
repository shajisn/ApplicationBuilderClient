/**
 * Application Builder Client
 * @flow
 */
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

var AppBuilderClient = React.createClass({
 
    _onPressButtonGET: function() {
        fetch("http://localhost:3000/test?search=nraboy", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            AlertIOS.alert(
                "GET Response",
                "Search Query -> " + responseData.search
            )
        })
        .done();
    },
 
    _onPressButtonPOST: function() {
        fetch("http://localhost:3000/test", {method: "POST", body: JSON.stringify({username: "nraboy", firstname: "Nic", lastname: "Raboy"})})
        .then((response) => response.json())
        .then((responseData) => {
            AlertIOS.alert(
                "POST Response",
                "Response Body -> " + JSON.stringify(responseData.body)
            )
        })
        .done();
    },
 
    render: function() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButtonGET} style={styles.button}>
                    <Text>GET</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButtonPOST} style={styles.button}>
                    <Text>POST</Text>
                </TouchableHighlight>
            </View>
        );
    },
 
});
 
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
    }
});
 
AppRegistry.registerComponent('AppBuilderClient', () => AppBuilderClient);

