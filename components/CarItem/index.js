import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyleButton from '../StyledButton';
import styles from './style';

const CarItem = (props) => {

  const {name, tagline, taglineCTA, image} = props.car;

    return (
        <View style={styles.carContainer}>
        <ImageBackground 
          source={image} 
          style={styles.image}
          />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}&nbsp;
            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>
          </Text>

        </View>
        <View style={styles.buttonContainer}>
          <StyleButton type="primary" content="Acquista una tesla" />
          <StyleButton type="secondary" content="Non hai manco 1€" />
        </View>
      </View>
    )
}

export default CarItem;

