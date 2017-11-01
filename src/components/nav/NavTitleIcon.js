 /**
 * @providesModule HSNavTitleIcon
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

let styles = {};

const NavTitleIcon = ({ src }) => (
  <View>
    <Text style={styles.heading}>SMART HOME</Text>
  </View>
);

styles = StyleSheet.create({
  container: {
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  logo: {
    width: 160,
    height: 34
  }
});

export default NavTitleIcon;
