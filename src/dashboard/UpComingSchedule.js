import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    ImageBackground,
    Button,
    Alert,
    TouchableOpacity,
    Image
} from "react-native";


import { commonStyle } from '../util/styles';
import Devider from '../util/devider';

import ScoringHome from '../scoreBoard/ScoringHome';

const rsvpYes = require('../img/thumbsUp.png');
const rsvpYes_Yes = require('../img/thumbsUpYes.png');
const rsvpNo = require('../img/thumbsDown.png');
const rsvpNo_No = require('../img/thumbsDownYes.png');

function _onPress() {
    Alert.alert('on Press!');
}

export default class UpComingSchedule extends Component {

    render() {
        return (
            <View style={[commonStyle.dataContainer1, commonStyle.paddingBottom_20]}>
                <UpComingScheduleView />

                <Devider borderColor='transparent' />

                <RSVPView />
            </View>
        )
    }
}

const UpComingScheduleView = () => (
    <View style={[commonStyle.paddingLeft_20, commonStyle.paddingTop_20]}>
        <Text style={[commonStyle.heading, {paddingBottom: 10}]}>UPCOMING MATCH</Text>

        <View style={commonStyle.paddingTop_20}>
            <View style={commonStyle.row}>
                <View style={[commonStyle.column, { width: '40%'}]}>
                    <Text style={[commonStyle.textCenter, {color: 'white', fontWeight: 'bold', fontSize: 16}]}>
                        Jersey Lions
                        </Text>   
                </View>

                <View style={[commonStyle.column, {width: '20%'}]}>
                    <View style={commonStyle.diamond}>
                        <Text style={commonStyle.diamondText}>vs</Text>
                    </View>
                </View>

            <View style={[commonStyle.column, {width: '40%'}]}>
                    <Text style={[commonStyle.textCenter, { color: 'white', fontWeight: 'bold', fontSize: 16}]}>
                        Mumbai Indians
                        </Text>
                </View>
            </View>
        </View>
    </View>
);

class RSVPView extends Component {

    constructor() {
        super();
        this.state = { 
            rsvpYes: true,
            rsvpNo: true
        };
    }

    render() {
        return (
            <View style={[commonStyle.paddingLeft_20, commonStyle.paddingTop_20]}>
                <Text style={[commonStyle.textCenter, { fontWeight: 'bold', color: 'white', paddingRight: 20 }]}>
                    Match 10
                </Text>
                <Text style={[commonStyle.textCenter, { fontWeight: 'bold', color: '#DC7633', fontSize: 16, paddingTop: 10 }]}>              
                    September 13. 2018 8AM
                </Text>
               
                    <View style={commonStyle.row}>
                         
                        <View style={commonStyle.column}>
                            <Text style={[commonStyle.textCenter, { fontWeight: 'bold', color: 'white'}]}>Please RSVP: </Text>
                        </View>

                        <View style={[commonStyle.column, { paddingLeft: 20 }]}>
                            <TouchableOpacity onPress={() => 
                                this.setState({ 
                                    rsvpYes: !this.state.rsvpYes,
                                    rsvpNo: this.state.rsvpNo
                                })
                            }>

                                <Image source={this.state.rsvpYes ? rsvpYes_Yes : rsvpYes} />
                            </TouchableOpacity>
                        </View>

                        <View style={commonStyle.column}>
                            <TouchableOpacity onPress={() =>
                                this.setState({
                                    rsvpYes: this.state.rsvpYes,
                                    rsvpNo: !this.state.rsvpNo
                                })
                            }>
                                <Image source={this.state.rsvpNo ? rsvpNo_No : rsvpNo} />
                            </TouchableOpacity>
                        </View>

                        <View style={commonStyle.column}>
                            <ScoringHome />
                        </View>                          
                </View>
                
            </View>
        )
    }
}