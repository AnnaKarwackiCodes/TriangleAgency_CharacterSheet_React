import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from '@mui/material';
import IconValueComponent from '@/components/iconValueComponent';
import useScreenSize from '@/helpers/useScreenSize';

export default function WorkLifeScreen() {
  const screenSize = useScreenSize();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work/Life Balance</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Box style={{display: 'flex',
          flexDirection: screenSize.width <= 1000 ? 'column' : 'row'}}>
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
