import React, { Component } from 'react';

import {    
    ImageBackground,   
    View,
    StyleSheet
} from "react-native";

export default class BackgroundImage extends Component {
    render() {
        return(
            <View style={styles.container}>
                {this.props.children}                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',    
    },
});
