import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import FillInTextComponent from '@/components/ScreenComponents/FillInTextComponent';
import React = require('react');
import { useDispatch, useSelector } from 'react-redux';
import { setAQ } from '@/redux/reducers/UserInfo';
import AgentBadgeComponent from '@/components/ScreenComponents/AgentBadgeComponent';
import useScreenSize from '@/helpers/useScreenSize';

export default function TabOneScreen() {
  const dispatch = useDispatch();
  const screenSize = useScreenSize();
  const AQ1Text = useSelector((store: any) => {
    return store.userInfo.AQ1;
  });
  const AQ2Text = useSelector((store: any) => {
    return store.userInfo.AQ2;
  });
  const AQ3Text = useSelector((store: any) => {
    return store.userInfo.AQ3;
  });
  const AQ4Text = useSelector((store: any) => {
    return store.userInfo.AQ4;
  });
  const AQ5Text = useSelector((store: any) => {
    return store.userInfo.AQ5;
  });
  const AQ6Text = useSelector((store: any) => {
    return store.userInfo.AQ6;
  });
  const AQ7Text = useSelector((store: any) => {
    return store.userInfo.AQ7;
  });
  const NotesText = useSelector((store: any) => {
    return store.userInfo.notes;
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
    },
    {
      question: 'Do your powers have a unique visual manifestation?',
      id: 'AQ3',
      object: AQ3Text
    },
    {
      question: 'How do you take your coffee?',
      id: 'AQ4',
      object: AQ4Text
    },
    {
      question: 'Please describe your prior work experience',
      id: 'AQ5',
      object: AQ5Text
    },
    {
      question: 'What is your level of familiarity with Adobe, Excel, and Google Suite?',
      id: 'AQ6',
      object: AQ6Text
    },
    {
      question: 'What do you bring to the table in a collaborative work enviroment?',
      id: 'AQ7',
      object: AQ7Text
    },
    {
      question: 'Additional Notes',
      id: 'notes',
      object: NotesText
    }
  ];

  //AQ = Agent Question: background question
  //id for later storage and interaction
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Agent</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={screenSize.width <= 500 ? styles.scrollViewHolderCol : styles.scrollViewHolderRow}>
        <View style={screenSize.width <= 500? styles.AgentBadgeComponentCol : styles.AgentBadgeComponentRow}>
            <AgentBadgeComponent />
          </View>
        <View style={screenSize.width <= 500 ? styles.ScrollViewCol : styles.ScrollViewRow}>
          <ScrollView style={{width: '100%', alignContent:'center'}}>
                {prompts.map((element: any) => {
                  return (<View style={{marginRight: 25}}>
                    <FillInTextComponent promptQuestion={element.question} responseTitle='Response' textId={element.id} saveCall={SaveResponse} responseText={element.object}/>
                  </View>)
                })}
              </ScrollView>
          </View>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center',
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollViewHolderRow: {
    width: '100%',
    height: '85%',
    display: 'flex',
    flexDirection: 'row',
  },
  scrollViewHolderCol: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  AgentBadgeComponentRow:{
    width: '50%', 
    display: 'flex', 
    alignItems: 'flex-end',
  },
  AgentBadgeComponentCol:{
    width: '100%', 
    display: 'flex', 
    alignItems: 'center',
  },
  ScrollViewRow:{
    width: '50%', height: '100%', alignItems: 'center', justifyContent:'center'
  },
  ScrollViewCol:{
    width: '100%', height: '60%', alignItems: 'center', justifyContent:'center'
  }
});
