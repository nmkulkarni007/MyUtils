import {
    StyleSheet    
} from "react-native";

export var commonStyle =  StyleSheet.create({
    topNav: {
        backgroundColor: '#1B4F72',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },

    topNavButton: {
        width: 50,
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Ubuntu'
    },

    topNavTitle: {
        fontSize: 17,
        fontFamily: 'Ubuntu',
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 10,
        flex: 1
    },

    heading: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#DC7633',
        fontSize: 13
    },

    dataContainer: {
        borderRadius: 15,
        borderWidth: 0.2,
        borderColor: '#000',
        paddingTop: 10,
        alignSelf: 'center',
        //backgroundColor: '#1B2631',
        //backgroundColor: '#2C3E50',
        width: '99.7%'
    },

    dataContainer1: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'gray',
        paddingTop: 10,
        alignSelf: 'center',
        backgroundColor: '#1B2631',        
        width: '99.7%'
    },
    
    gridLines: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#000',
        padding: 8,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },

    row: {
        flexDirection: 'row',
    },

    diamond: {
        width: 25,
        height: 25,
        backgroundColor: '#EBF5FB',
        transform: [
            { rotate: '45deg' }
        ]
    },

    diamondText: {
        width: 20,
        height: 20,
        marginTop: 0,
        marginLeft: 5,
        transform: [{ rotate: '315deg' }],
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },

    paddingTop_20: {
        paddingTop: 10
    },

    paddingBottom_20: {
        paddingBottom: 20
    },

    paddingRight_20: {
        paddingRight: 20
    },


    paddingLeft_20: {
        paddingLeft: 20
    },


    column: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
    },

    containerText: {
        color: 'white', 
        fontWeight: 'bold',
    },

    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});