'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    View,
} = React;

var styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: 'red',
    },
    floatView: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: 200,
        left: 40,
        backgroundColor: 'green',
    },
    parent: {
        flex: 1,
    }
});


var Example = React.createClass({

    render: function () {

        return (
            <View style={styles.parent}>
                <View style={styles.fullScreen} />
                <View style={styles.floatView} />
            </View>
        );
    },


});

module.exports = Example;