import { AppRegistry } from 'react-native';
import App from './App';
import Stack from './src/Stack';
import ScoreBoard from './src/scoreBoard/ScoreBoard';
import ModalExample from './src/Demo';
import ReduxExample from './src/redux/reduxExample'


import {
    setCustomView,
    setCustomTextInput,
    setCustomText,
    setCustomImage,
    setCustomTouchableOpacity    
} from 'react-native-global-props';

// Setting a default background color for all View components.
const customViewProps = {
    style: {
        
    }
};

// Getting rid of that ugly line on Android and adding some custom style to all TextInput components.
const customTextInputProps = {
    underlineColorAndroid: 'rgba(0,0,0,0)',
    style: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'transperent',
    }
};

// Setting default styles for all Text components.
const customTextProps = {
    style: {
        fontSize: 15,   
        color: 'black',
        textAlignVertical: 'center',
        fontFamily: 'Ubuntu',
        fontSize: 12,
        fontWeight: 'normal'   
    }
};

// Makes every image resize mode cover by default.
const customImageProps = {
    resizeMode: 'cover'
};

// Adds a bigger hit box for all TouchableOpacity's.
const customTouchableOpacityProps = {
    hitSlop: { top: 15, right: 15, left: 15, bottom: 15 }
};

setCustomView(customViewProps);
setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);
setCustomImage(customImageProps);
setCustomTouchableOpacity(customTouchableOpacityProps);

AppRegistry.registerComponent('Navigator', () => Stack);
