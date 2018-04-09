import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';

const App = () => {
    return(
    <View>
        <Header headerText="runRouter" />
        <Text> Jennys branch </Text>
    </View>
    );
}

export default App;