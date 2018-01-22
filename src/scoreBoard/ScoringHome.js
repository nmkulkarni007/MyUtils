import React, { Component } from 'react';
import {
    Text,
    View,
    Modal,
    TouchableHighlight
} from "react-native";

import { commonStyle } from '../util/styles';

import ScoreBoard from './ScoreBoard';
export default class ScoringHome extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
             <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                    style={commonStyle.dataContainer}>
                    <View style={{ marginTop: 50 }}>
                        <ScoreBoard />
                    </View>
                </Modal>

                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text style={{color: 'red', paddingLeft: 20}}>Start Game</Text>
                </TouchableHighlight>
             </View>
        )
    }
}