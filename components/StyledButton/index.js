import React from 'react';
import {Pressable, View, Text} from 'react-native';
import styles from './style';

const StyleButton = (props) => {

    const { type, content } = props;
    
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
        <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={()=>{
            console.warn('Yea')
        }}
        >
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
        </View>
    )
}

export default StyleButton;

