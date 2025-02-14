import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import FillInTextComponent from '@/components/ScreenComponents/FillInTextComponent';
import React = require('react');
import { useDispatch, useSelector } from 'react-redux';
import { setAQ } from '@/redux/reducers/UserInfo';

export default function TabOneScreen() {
  const dispatch = useDispatch();
  const AQ1Text = useSelector((store: any) => {
    return store.userInfo.AQ1;
  });
  const AQ2Text = useSelector((store: any) => {
    return store.userInfo.AQ2;
  });

  function SaveResponse(id: string, value: string){
    dispatch(setAQ({question:id, value: value}));
  }

  const prompts = [
    {
      question: 'How did you come in contact with your Anomaly?',
      id: 'AQ1',
      object: AQ1Text
    },
    {
      question: 'How did you come in contact with your Anomaly?',
      id: 'AQ2',
      object: AQ2Text
    }
  ];

  //AQ = Agent Question: background question
  //id for later storage and interaction
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Agent</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {prompts.map((element: any) => {
        return <FillInTextComponent promptQuestion={element.question} responseTitle='Response' textId={element.id} saveCall={SaveResponse} responseText={element.object}/>
      })}
      
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
