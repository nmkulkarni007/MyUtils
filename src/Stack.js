import React, { Component } from 'react';

import {
    View,
    Text,
    Button,
    commonStyleheet,
    ImageBackground,
    Image,
    Dimensions
} from "react-native";

import {
    TabNavigator,
    StackNavigator
} from "react-navigation";

import BackgroundImage from './util/backGroundImage';
import PlayerStats from './dashboard/playerStats'
import UpComingSchedule from './dashboard/UpComingSchedule'

import { commonStyle } from './util/styles'

const TopNav = () => (
    <View style={commonStyle.topNav}>
        <Text style={commonStyle.topNavTitle}>Just Play!!</Text>
        <ImageBackground source={require('./img/notification.png')} style={{ width: 15, paddingRight: 30 }} />
    </View>
);

const ChildScene1 = ({ navigation }) => (
    
    <BackgroundImage>
        <TopNav />
        <View style={{ paddingTop: 10, paddingLeft: 20 }}>
            <Text style={commonStyle.heading}>Team Message</Text>
            <Text style={{color: '#000'}}>After having a fun meet of the group and talking about everything else other than cricket.
Let’s talk cricket . I believe everyone of us must have in one way or another analyzed what happened during the course of the season.
Please type in what u thought of it. Good bad ugly. I think it’s worth discussing</Text>
        </View>
        
        <View style={{paddingTop: 10}}>
            <PlayerStats /> 
        </View>
        <View style={{ paddingTop: 5 }}>
            <UpComingSchedule />            
        </View>
    </BackgroundImage>   
);

const ChildScene2 = () => (
    <BackgroundImage> 
        <View>
            <Text style={commonStyle.topNavButton}>Add</Text>
            <Text style={commonStyle.topNavTitle}>This is the title</Text>
            <Text style={commonStyle.topNavButton}>Like</Text>
        </View>
        
        <View>  
            <PlayerStats /> 
        </View>
    </BackgroundImage>
);

const ChildScene3 = ({navigation}) => (    
    <BackgroundImage>
      
    </BackgroundImage>
);

const ChildScene4 = () => (
    <BackgroundImage>
       
    </BackgroundImage>
);


const ParentScene1 = TabNavigator({
    Dashboard: {
        screen: ChildScene1,
        navigationOptions: {            
            showIcon: true
        }
    },

    Analysis: {
        screen: ChildScene2
    },

    Standings: {
        screen: ChildScene2
    },

    Settings: {
        screen: ChildScene2
    },
    

},
{
    tabBarOptions: {
        activeTintColor: '#e91e63',

        labelStyle: {
            fontSize: 13,
            fontFamily: 'Ubuntu'         
        },

        style: {
            borderTopWidth: 1,
            backgroundColor: '#1B2631',
            paddingBottom: 5,

        },
    }
});

const SimpleApp1 = StackNavigator({
    Home: {
        screen: ParentScene1,
        navigationOptions: {
            tabBarIcon: <Image source={require('./img/ball.png')} />,
            showIcon: true
        }
    }
}, 
{
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    },
    style: {
        backgroundColor: '#fff'  
    }
});

export default class Stack extends Component {

    render() {
        return (
            <SimpleApp1 />
        );
    }
}