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
    Picker,
    TextInput,
    Modal,
    TouchableHighlight,
    ListView,
} from "react-native";

import { DialogComponent, SlideAnimation } from 'react-native-dialog-component';

import { commonStyle } from '../util/styles';
import Devider from '../util/devider';
import TableRow from '../util/TableRow';
import Display from '../util/display';


import playerData from '../data/rsvpYes.json';

const SUMMARY_HEADINGS = ["", "R", "B", "4s", "6s", "SR"];
const SUMMARY_HEADINGS_RECORD_KEYS = ["name", "runs", "ballsFaced", "fours", "dixes", "SR"];
let DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];

export default class ScoreBoard extends Component {

    
    constructor (props) {
        super(props)
        this.state = {
            onStrike: '',
            nonStrike: '',
            modalVisible: false,
        }
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    processModalData(modalData) {
        console.log(JSON.stringify(modalData));
    }
    
    render() {
        return (
            <View style={{paddingTop: 50}}>
                <View style={[commonStyle.dataContainer1, commonStyle.paddingBottom_20]}>

                    <Modal animationType="slide" transparent={true} visible={this.state.modalVisible} >
                        <View style={{ marginTop: 100, height: 200, backgroundColor: '#DCDCDC' }}>
                            <BattingBowllingStart toggleModal={this.toggleModal.bind(this)} processModalData={this.processModalData.bind(this)}/>
                        </View>
                    </Modal>
                    
                    <ScoreBoardBanner  />

                    <Devider borderColor='transparent' />                
                </View>
            </View>
        )
    }
}

class ScoreBoardBanner extends Component {

    constructor (props) {
        super(props)
        this.state = {
            totalScore: 0,
            wickets: 0,
            overs: 0,
            
            batsMan1: {
                name: 'Nikhil Kulkarni',
                runs: 0,
                ballsFaced: 0,
                fours: 0,
                dixes: 0,
                SR: 0
            },
            
            batsMan2: {
                name: 'Nikhil',
                runs: 0,
                ballsFaced: 0,
                fours: 0,
                dixes: 0,
                SR: 0
            }
        }
    }
    
    render() {
        return (
            <View>
                <Text style={[commonStyle.textCenter, { color: 'white', fontWeight: 'bold', fontSize: 20 }]}>
                    {this.state.totalScore} / {this.state.wickets}  ( {this.state.overs} )
                </Text>

                <View style={[commonStyle.row, {paddingTop: 25}]}>
                    <TableRow key="1" 
                                data={SUMMARY_HEADINGS}
                                headings={SUMMARY_HEADINGS_RECORD_KEYS}
                                displayIndexedRecords={true}
                                showGrid={false}
                                recordTextColor='#3498DB' />
                </View>

                <View style={[commonStyle.row, commonStyle.paddingTop_20]}>
                    <TableRow key="1"
                        data={this.state.batsMan1}
                        headings={SUMMARY_HEADINGS_RECORD_KEYS}
                        displayIndexedRecords={false}
                        showGrid={false}
                        recordTextColor='#FFF' />
                </View>
                
                <View style={[commonStyle.row, commonStyle.paddingTop_20]}>
                    <TableRow key="1"
                        data={this.state.batsMan2}
                        headings={SUMMARY_HEADINGS_RECORD_KEYS}
                        displayIndexedRecords={false}
                        showGrid={false}
                        recordTextColor='#FFF' />
                </View>
            </View>
        )
    }
}

class BattingBowllingStart extends Component {


    constructor (props) {
        super(props)
        this.state = {
            onStrike: '',
            nonStrike: '',
            bowler: "",
            playerModalOn: false
        }        
    }

    togglePlayerModal(modalState) {
        console.log("showing plauer modal??? " + modalState)
        this.state.playerModalOn = modalState;
    }

    getSelectedPlayer(forWhat, player) {
        console.log("Selected from the list... " + forWhat + " => " + JSON.stringify(player));
        this.state.playerModalOn = false;
    }

    render() {
        return (
                <View>
                    { /* Striker batsman Select*/}
                    <View style={commonStyle.row}>
                        <View style={commonStyle.column}>
                            <Text style={{ color: 'black', padding: 10, fontWeight: 'bold', width: 100 }}>Non Strike</Text>
                        </View>
                        
                        <View style={commonStyle.column}>

                            <TouchableHighlight style={{ padding: 10, backgroundColor: '#FF4500'}} onPress={() => { this.togglePlayerModal(true) }}>
                                <Text style={{ color: 'black', paddingLeft: 20, fontWeight: 'bold' }}>Select Player</Text>
                            </TouchableHighlight>

                            <Modal animationType="fade" transparent={true} visible={this.state.playerModalOn} >
                                <View style={{ marginTop: 150, height: 300, backgroundColor: 'red' }}>
                                    
                                    <TeamList playerData={playerData}
                                                choosePlayerFor={'ON-STRIKE'}
                                                togglePlayerModal={this.togglePlayerModal.bind(this)} 
                                                getSelectedPlayer={this.getSelectedPlayer.bind(this)} />
                                </View>
                            </Modal>
                        </View>
                    </View>

                    <View style={{ height: 10 }} />

                  
                </View>                
        )
    }    
}

class TeamList extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'blue'}}>
                <ScrollView style={{ height: 300 }}>
                    {
                        this.props.playerData.rsvp.map((item) => (                            
                            <TouchableHighlight key={item.id} style={{ padding: 10, backgroundColor: '#FF4500' }} onPress={() => {
                                this.props.getSelectedPlayer('ON-STRIKE', item)
                            }}>
                                <Text style={{ color: 'black', paddingLeft: 20, fontWeight: 'bold' }}>{item.Name}</Text>
                            </TouchableHighlight>                           
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',        
    },

    myText: {
        fontSize: 16,
        padding: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },

    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },

    button: {
        padding: 15,
        backgroundColor: '#008080'
    }
}