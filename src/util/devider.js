import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

let { width, height } = Dimensions.get('window')

class Devider extends Component {
    borderColor = '#85929E';

    constructor (props) {
        super(props)
        borderColor = this.props.borderColor ? this.props.borderColor : '#85929E';        
    }
    
    render() {
        return (
            <View style={{
                borderBottomColor: borderColor,
                borderBottomWidth: 0.5,
                width: width - 5,
                paddingTop: 15,                
            }} />                
        )
    }
}

export default Devider;