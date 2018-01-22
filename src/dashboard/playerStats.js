import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    ImageBackground,
    Alert
} from "react-native";
import Devider from '../util/devider';
import { commonStyle } from '../util/styles';
import {
    BATTING_HEADINGS,
    BATTING_RECORD_KEYS,
    BALLING_HEADINGS,
    BALLING_RECORD_KEYS
} from '../util/Constants';

import dashboardData from '../data/dashboard.json';

export default class PlayerStats extends Component {

    render() {
        return (
            <View style={commonStyle.dataContainer}>
                <BattingView />
                
                <Devider />
                
                <BallingView />
            </View>
        )
    }
}

const BattingView = () => (

    <View style={commonStyle.paddingLeft_20}>
        <Text style={[commonStyle.heading]}>BATTING STATS</Text>

        <View style={[commonStyle.row, commonStyle.paddingTop_20]}>
            <View>
                <RenderRow key="1" data={BATTING_HEADINGS} headings={BATTING_RECORD_KEYS} displayIndexedRecords={true} />
                {
                    dashboardData.dashBoard.map((item) => (
                        <RenderRow key={item.id} data={item.batting} headings={BATTING_RECORD_KEYS} useIndex={false} />
                    ))
                }
            </View>
        </View>        
    </View>
);

const BallingView = () => (

    <View style={commonStyle.paddingLeft_20}>
        <Text style={[commonStyle.paddingTop_20, commonStyle.heading]}>BALLING STATS</Text>
        
        <View style={[commonStyle.row, commonStyle.paddingTop_20, commonStyle.paddingBottom_20]}>
            <View>
                <RenderRow key="1" 
                    data={BALLING_HEADINGS} 
                    headings={BALLING_RECORD_KEYS} 
                    displayIndexedRecords={true} />
                
                {
                    dashboardData.dashBoard.map((item) => (
                        <RenderRow key={item.id} 
                                    data={item.balling} 
                                    headings={BALLING_RECORD_KEYS} 
                                    useIndex={false} />
                    ))
                }

            </View>
        </View>
    </View>
);

const RenderRow = ({ data, headings, displayIndexedRecords }) => (
    <View>
        <View key={data.id} style={commonStyle.column}>
            {
                headings.map((item, i) => (

                    <View key={i} style={commonStyle.gridLines}>
                        <Text style={{
                                        color: displayIndexedRecords ? '#3498DB' : '#000' , 
                                        width: 40, 
                                        textAlign: 'center', 
                                        textAlignVertical: 'center', 
                                        fontFamily: 'Ubuntu', 
                                        fontSize: 12, 
                                        fontWeight: 'bold' }}>
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

export function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}