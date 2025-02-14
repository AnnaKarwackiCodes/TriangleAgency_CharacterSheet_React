import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import FillInTextComponent from '@/components/ScreenComponents/FillInTextComponent';
import React = require('react');
import { UseSelector, useDispatch } from 'react-redux';
import { setAQ } from '@/redux/reducers/UserInfo';

export default function TabOneScreen() {
  const dispatch = useDispatch();

  function SaveResponse(id: string, value: string){
    dispatch(setAQ({question:id, value: value}));
  }

  //AQ = Agent Question: background question
  //id for later storage and interaction
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Agent</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FillInTextComponent promptQuestion='How did you come in contact with your Anomaly?' responseTitle='Response' textId='AQ1' saveCall={SaveResponse}/>
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
