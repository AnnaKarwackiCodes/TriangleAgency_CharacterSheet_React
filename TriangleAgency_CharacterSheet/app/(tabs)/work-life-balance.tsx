import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from '@mui/material';
import IconValueComponent from '@/components/ScreenComponents/iconValueComponent';
import useScreenSize from '@/helpers/useScreenSize';
import LevelUpComponent from '@/components/ScreenComponents/LevelUpComponent';

export default function WorkLifeScreen() {
  const screenSize = useScreenSize();

  const [compentencyValue, setCompetencyValue] = useState(0);
  const [realityValue, setRealityValue] = useState(0);
  const [anomlyValue, setAnomlyValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work/Life Balance</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{ width: '100%', height: '85%', alignItems: 'center', justifyContent:'center' }}>
      <ScrollView style={{width: '100%', alignContent:'center'}}>
      <Box style={{display: 'flex', width: '100%', flexDirection: screenSize.width <= 1000 ? 'column' : 'row', padding: 15}}>
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
        <IconValueComponent icon={<PersonAddIcon style={{color: 'red'}}/>} title={"MVP"} details="Times Recieved" toolTip="Awarded to the player who earns the most Commendations" saveFunc={()=>{}} color={"red"}/>
        <IconValueComponent icon={<HighlightOffIcon style={{color: 'black'}}/>} title={"Probation"} details="Times Recieved" toolTip="Awarded to the player who earns the most Demerits" saveFunc={()=>{}} color={"black"}/>
      </Box>
      <LevelUpComponent title="Compentency" trackLength={15} curValue={compentencyValue} colDetails0={"Each time you mark a box in your Compentency track, increase your Maximum Quailty Assurance by 1 in any Quailty, up to a maximum of 9. Then, gain 3 Commendations."} colDetails1={"When you recieve Mission MVP, mark 1 box in your Compentency track withour stricking one out from the other tracks"} levelUpDetails={[{title: "blah", description: "what"}, {title: "blah", description: "what"}, {title: "blah", description: "what"}, {title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"}]} levelUpFunc={(value: number)=>{setCompetencyValue(value);}}/>
      <LevelUpComponent title="Compentency" trackLength={15} curValue={realityValue} colDetails0={"Each time you mark a box in your Compentency track, increase your Maximum Quailty Assurance by 1 in any Quailty, up to a maximum of 9. Then, gain 3 Commendations."} colDetails1={"When you recieve Mission MVP, mark 1 box in your Compentency track withour stricking one out from the other tracks"} levelUpDetails={[{title: "blah", description: "what"}, {title: "blah", description: "what"}, {title: "blah", description: "what"}, {title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"},{title: "blah", description: "what"}]} levelUpFunc={(value: number)=>{setRealityValue(value);}}/>
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
