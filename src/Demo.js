import React, { Component } from 'react';
import { Text, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import Modal from './Modal';

export default class ModalExample extends Component {

    constructor (props) {
        super(props)
        this.state = {
            open: false
        }
    }
    
    render() {
        return (
            <View style={{ marginTop: 100 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.setState({ open: true })}>
                        <Text>Open modal</Text>
                    </TouchableOpacity>
                    
                    <Modal
                        offset={this.state.offset}
                        open={this.state.open}
                        modalDidOpen={() => console.log('modal did open')}
                        modalDidClose={() => this.setState({ open: false })}
                        style={{ alignItems: 'center'}}>
                        <View style={{width: '100%', backgroundColor: 'blue'}}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text> 
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text>                           
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}