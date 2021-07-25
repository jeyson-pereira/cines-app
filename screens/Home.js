import React, { Component } from 'react';
import { Text, View } from 'react-native';
import gStyle from '../utils/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text style={gStyle.Title}> Home CinesApp </Text>
                    <Text style={gStyle.Title} onPress={() => this.props.navigation.navigate('Movie')}> Go to Movie </Text>
                </View>
            </SafeAreaView>
        )
    }
}
