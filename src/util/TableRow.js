import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from "react-native";


import { commonStyle } from '../util/styles';

export default class TableRow extends Component {

    render() {
        return (
            <View>
                <View key={this.props.data.id} style={commonStyle.column}>
                    {
                        this.props.headings.map((item, i) => (

                            <View key={i} style={this.props.showGrid ? commonStyle.gridLines : tableStyle.plainColumn}>
                                <Text style={{
                                    color: this.props.recordTextColor,
                                    width: i == 0 ? 120 : 40,
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    fontFamily: 'Ubuntu',
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}>
                                    {
                                        this.props.displayIndexedRecords ? this.props.data[i] : this.props.data[item]
                                    }
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const tableStyle = StyleSheet.create({
    gridLines: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#000',
        padding: 8,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },

    plainColumn: {
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});