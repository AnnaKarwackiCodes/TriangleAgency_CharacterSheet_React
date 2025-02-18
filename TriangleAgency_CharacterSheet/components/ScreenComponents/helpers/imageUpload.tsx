import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import React = require('react');
import { Image } from 'react-native';

export default function ImageUpload() {

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/testImages/wulfred.jpg')} style={{height: 150, width: 100}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
