import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions
} from "react-native";
import BackgroundImage from '../util/backGroundImage'
import dashboardData from '../data/dashboard.json'

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Devider from '../util/Hr';

const heading = ['R', 'M', 'I', '4s', '6s', 'SR', 'Avg'];
const tableHead = ['runsScored', 'matches', 'innings', 'fours', 'sixes', 'strikeRate', 'average'];

let { width, height } = Dimensions.get('window')

export default class Stats extends Component {

    render () {
        return (
            <View style={styles.toolbar}>
                <ScrollView horizontal={true} >
                    <View>
                        <RenderRow key="1" data={heading} headings={tableHead} displayIndexedRecords={true} />
                        {
                            dashboardData.dashBoard.map((item) => (
                                <RenderRow key={item.id} data={item.batting} headings={tableHead} useIndex={false} />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const RenderRow = ({ data, headings, displayIndexedRecords }) => (
    <View>
        <View key={data.id} style={styles.column}>
            {
                headings.map((item, i) => (

                    <View key={i} style={styles.gridLines}>
                        <Text style={{ color: 'white', width: 30, textAlign: 'center', textAlignVertical: 'center' }}>
                            {
                                displayIndexedRecords ? data[i] : data[item]
                            }
                        </Text>
                    </View>
                ))
            }
        </View>
    </View>
);



var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: 'blue',
        flexDirection: 'row',        
    },

    column: {
        flexDirection: 'row',        
        alignSelf: 'center',
        
    },

    gridLines: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'red',
        padding: 10,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});