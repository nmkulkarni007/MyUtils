import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import Display from './util/display';

export default class TestDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { enable: true };
    }

    toggleDisplay() {
        let toggle = !this.state.enable;
        this.setState({ enable: toggle });
    }

    render() {
        return (
            <View>
                <View style={styles.button}>
                    <Button
                        onPress={this.toggleDisplay.bind(this)}
                        title="Toggle display"
                        color="#34495e"
                        accessibilityLabel="Toggle display for show/hide circles"
                    />
                </View>
                <View style={styles.center}>
                    <Display
                        enable={this.state.enable}
                        enterDuration={500}
                        exitDuration={250}
                        exit="fadeOutLeft"
                        enter="fadeInLeft"
                    >
                        <View style={[styles.circle, { backgroundColor: '#2ecc71' }]} />
                    </Display>
                    <Display
                        enable={this.state.enable}
                        enterDuration={500}
                        exitDuration={250}
                        exit="fadeOutDown"
                        enter="fadeInUp"
                    >
                        <View style={[styles.circle, { backgroundColor: '#9b59b6' }]} />
                    </Display>
                    
                    
                    <Display enable={this.state.enable} exit="fadeOutRight"
                        enter="fadeInRight" enterDuration={500}
                        exitDuration={250}>
                        <View style={{backgroundColor: '#3498db'}}>
                        <Text> My custom components </Text>
                        </View>
                    </Display>
                </View>
            </View>
        );
    }
}

const styles = {
    button: {
        padding: 10,
        margin: 15,
    },
    center: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle: {
        borderRadius: 50,
        height: 100,
        width: 100,
        margin: 15
    },
}