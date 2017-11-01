import React, { Component } from 'react';
import { ScrollView, TouchableHighlight, View, StyleSheet, Platform, Image } from 'react-native';
import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Text,
  Button,
  Grid,
  Col,
  Row
} from 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

class Home extends Component {
  render () {
    const { toggleSideMenu } = this.props
    return (

        <ScrollView style={{ backgroundColor: 'white' }}>

        <View >
          <Icon color='white' name='whatshot' size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>

        <Button
          backgroundColor={socialColors.facebook}
          onPress={() => log()}
          title='PLUG'
          textStyle={styles.heading}
          icon={{ name: 'power-plug', type: 'entypo', size: 80 }}
          buttonStyle={styles.hero} />

        <Button
          buttonStyle={styles.smart_meter}
          backgroundColor={socialColors.stumbleupon}
          textStyle={styles.heading}
          icon={{ name: 'md-speedometer', type: 'ionicon', size: 80 }}
          onPress={() => toggleSideMenu()}
          title='SMART METER'/>

          <Button
            buttonStyle={styles.smart_lamp}
            textStyle={styles.heading}
            icon={{ name: 'light-bulb', type: 'entypo', size: 80 }}
            onPress={() => toggleSideMenu()}
            title='LAMP'/>

        <Button
          buttonStyle={styles.button}
          iconRight
          backgroundColor={socialColors.tumblr}
          icon={{name: 'motorcycle'}}
          onPress={() => log()}
          title='BUTTON WITH RIGHT ICON'/>
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.foursquare}
          icon={{name: 'card-travel'}}
          onPress={() => log()}
          title='BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.vimeo}
          icon={{name: 'touch-app'}}
          onPress={() => log()}
          title='BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.twitter}
          icon={{name: 'new-releases'}}
          onPress={() => log()}
          title='BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.linkedin}
          icon={{name: 'business'}}
          onPress={() => log()}
          title='BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.pinterest}
          icon={{name: 'send'}}
          onPress={() => log()}
          title='BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          onPress={() => log()}
          title='BUTTON RAISED'/>

        <Button
          large={true}
          buttonStyle={styles.button}
          onPress={() => log()}
          backgroundColor={socialColors.facebook}
          title='LARGE BUTTON' />
        <Button
          large={true}
          buttonStyle={styles.button}
          backgroundColor={socialColors.stumbleupon}
          icon={{name: 'cached'}}
          title='LARGE BUTTON WITH ICON' />
        <Button
          large={true}
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          raised
          icon={{name: 'album'}}
          title='LARGE RAISED WITH ICON' />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          iconRight
          backgroundColor={socialColors.tumblr}
          icon={{name: 'accessibility'}}
          title='LARGE RAISED RIGHT ICON' />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          iconRight
          backgroundColor={socialColors.foursquare}
          icon={{name: 'account-balance'}}
          title='LARGE RAISED RIGHT ICON' />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.vimeo}
          icon={{name: 'change-history'}}
          title='LARGE RAISED WITH ICON' />
        <Button>
          large={true}
          buttonStyle={[{marginBottom: 15, marginTop: 15}]}
          icon={{name: 'code'}}
          backgroundColor={socialColors.twitter}
          title='LARGE ANOTHER BUTTON'
        </Button>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2
  },
  smart_meter: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: socialColors.stumbleupon
  },
  smart_lamp: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: socialColors.vimeo
  },
  titleContainer: {
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
});

export default Home;
