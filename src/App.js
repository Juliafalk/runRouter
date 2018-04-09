import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Button, CardSection } from './components/common';
import { StackNavigator, SwitchNavigator, TabNavigator } from 'react-navigation';

class StartScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    render() {
        return (
            <View>
                <Header headerText="runRouter" />
                <Text> Let do this </Text>
                <CardSection>
                    <Button onPress={this.showMore}> Test2 </Button>
                </CardSection>
            </View>
        );
    }

    showMore = () => {
        this.props.navigation.navigate('Test');
    };
}

class TestScreen extends React.Component {
    static navigationOptions = {
        title: 'Test'
    }; 

    render () {
        return (
        <View>
            <Header headerText="Testing" />
            <Text>Testing page2</Text>
        </View>
        );
    }
}

//const AppStack = StackNavigator({Test: TestScreen });

//const App = () => {
//    return(
//    <View>
//        <Header headerText="runRouter" />
//        <Text> Let do this </Text>
//    </View>
//    );
//}

export default SwitchNavigator({
    Home: { screen: StartScreen },
    Test: { screen: TestScreen },
  });

