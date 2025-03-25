import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from '@mui/material';
import IconValueComponent from '@/components/ScreenComponents/iconValueComponent';
import useScreenSize from '@/helpers/useScreenSize';
import LevelUpComponent from '@/components/ScreenComponents/LevelUpComponent';
import { compentencyTrack, realityTrack, anomalyTrack } from '@/helpers/workLifeHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { setAnomaly, setCompetency, setMVP, setProbation, setReality } from '@/redux/reducers/WorkLife';

export default function WorkLifeScreen() {
  const screenSize = useScreenSize();
  const dispatch = useDispatch();
  const mvpValue = useSelector((store: any) => {
    return store.workLife.mvpValue;
  });
  const probationValue = useSelector((store: any) => {
    return store.workLife.probationValue;
  });
  const competencyValue = useSelector((store: any) => {
    return store.workLife.competencyValue;
  });
  const realityValue = useSelector((store: any) => {
    return store.workLife.realityValue;
  });
  const anomalyValue = useSelector((store: any) => {
    return store.workLife.anomalyValue;
  });

  const [myMVPValue, setMyMVPValue] = useState(0);
  const [myProbationValue, setMyProbationValue] = useState(0);
  const [myCompetencyValue, setMyCompetencyValue] = useState(0);
  const [myRealityValue, setMyRealityValue] = useState(0);
  const [myAnomalyValue, setMyAnomalyValue] = useState(0);

  const sectionInfo = {
    compentency: {
      title: "Compentency",
      text1: "Each time you mark a box in your Compentency track, increase your Maximum Quailty Assurance by 1 in any Quailty, up to a maximum of 9. Then, gain 3 Commendations.",
      text2:"When you recieve Mission MVP, mark 1 box in your Compentency track withour stricking one out from the other tracks"
    },
    reality: {
      title: "Reality",
      text1: "Each time you mark a box in your Reality Track, increase your Connection with any Relationship by 1, then repeat for for each Networked Relationship.", 
      text2: "When you recieve neither Mission MVP nor Probation, you may increase your Connection with any Relationship by 1."
    },
    anomaly: {
      title: "Anomaly",
      text1: "Each time you mark a box in your Anomaly Track, pick one: \n PRACTICE: Mark Practiced on any Anomaly Abilty.\nBE KNOWN: Erase Practiced from an Anomly ability and ask your team that ability's question. Mark the track of the answer that gets the most votes, then recieved any unlocked Abilities.", 
      text2: "When you recieve Probation, mark 1 box in your Anomlay track, withour striking one out from the other tracks."
    }
  };

  useEffect(()=>{
    dispatch(setCompetency({value: myCompetencyValue}));
  },[myCompetencyValue]);
  useEffect(()=>{
    dispatch(setReality({value: myRealityValue}));
  },[myRealityValue]);
  useEffect(()=>{
    dispatch(setAnomaly({value: myAnomalyValue}));
  },[myAnomalyValue]);
  useEffect(()=>{
    dispatch(setMVP({value: mvpValue}));
  },[myMVPValue]);
  useEffect(()=>{
    dispatch(setProbation({value: myProbationValue}));
  },[myProbationValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work/Life Balance</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{ width: '100%', height: '85%', alignItems: 'center', justifyContent:'center' }}>
          <ScrollView style={{width: '100%', alignContent:'center'}}>
            <Box style={{display: 'flex', width: '100%', flexDirection: screenSize.width <= 1000 ? 'column' : 'row', padding: 15, justifyContent:'center'}}>
              <Box style={{display: 'flex', flexDirection: 'column'}}>
                <Box style={{display: 'flex', flexDirection: 'row', width: 300, backgroundColor: "#ffd1d5", height: 'auto', alignItems: 'center', justifyContent: 'center', padding: 10, margin: 5}} sx={{ border: 1, borderColor:'red', borderRadius: '16px' }}>
                  <Box style={{padding: 15}}>
                    <WarningIcon style={{color: 'red'}}/>
                  </Box>
                  <Text style={{color: 'red', fontSize: 17, fontWeight: '500'}}>Each time you mark a box, a box will be striked out from the end of the other paths </Text>
                </Box>
                <Box style={{margin: 10}}>
                  <Text>Mark 1 box per available time after each mission</Text>
                </Box>
              </Box>
              <IconValueComponent icon={<PersonAddIcon style={{color: 'red'}}/>} title={"MVP"} details="Times Recieved" toolTip="Awarded to the player who earns the most Commendations" saveFunc={()=>{setMyMVPValue}} color={"red"}/>
              <IconValueComponent icon={<HighlightOffIcon style={{color: 'black'}}/>} title={"Probation"} details="Times Recieved" toolTip="Awarded to the player who earns the most Demerits" saveFunc={()=>{setMyProbationValue}} color={"black"}/>
            </Box>
            <LevelUpComponent title={sectionInfo.compentency.title} trackLength={30} curValue={myCompetencyValue} colDetails0={sectionInfo.compentency.text1} colDetails1={sectionInfo.compentency.text2} levelUpDetails={compentencyTrack} levelUpFunc={(value: number)=>{setMyCompetencyValue(value);}}/>
            <LevelUpComponent title={sectionInfo.reality.title} trackLength={30} curValue={myRealityValue} colDetails0={sectionInfo.reality.text1} colDetails1={sectionInfo.reality.text2} levelUpDetails={realityTrack} levelUpFunc={(value: number)=>{setMyRealityValue(value);}}/>
            <LevelUpComponent title={sectionInfo.anomaly.title} trackLength={30} curValue={myAnomalyValue} colDetails0={sectionInfo.anomaly.text1} colDetails1={sectionInfo.anomaly.text2} levelUpDetails={anomalyTrack} levelUpFunc={(value: number)=>{setMyAnomalyValue(value);}}/>
          </ScrollView>
        </View>
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
