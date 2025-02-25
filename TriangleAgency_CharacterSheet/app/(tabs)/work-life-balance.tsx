import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Button, TextField } from '@mui/material';
import FillInTextComponent from '@/components/ScreenComponents/FillInTextComponent';

export default function WorkLifeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work/Life Balance</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Box style={{display: 'flex',
          flexDirection: 'row'}}>
        <Box style={{width: 300, backgroundColor: "#ffd1d5", height: 60, alignItems: 'center', justifyContent: 'center',  display: 'flex',
          flexDirection: 'row', padding: 10, margin: 5}} sx={{ border: 1, borderColor:'red', borderRadius: '16px' }}>
          <Box style={{padding: 15}}>
            <WarningIcon style={{color: 'red'}}/>
          </Box>
          <Text style={{color: 'red', fontSize: 17, fontWeight: '500'}}>Each time you mark a box, a box will be striked out from the end of the other paths </Text>
        </Box>
        <Box style={{width: 300, backgroundColor: "white", height: 60, alignItems: 'center', justifyContent: 'center',  display: 'flex',
          flexDirection: 'row', padding: 10, margin: 5}} sx={{ border: 1, borderColor:'red', borderRadius: '16px' }}>
            <Box style={{padding: 15}}>
              <PersonAddIcon style={{color: 'red'}}/>
            </Box>
            <Box fontStyle={{display: 'flex', flexDirection: 'column'}}>
              <Text style={{color: 'red', fontSize: 20, fontWeight: '800'}}>MVP</Text>
              <Text style={{color: 'red', fontSize: 15, fontWeight: '500'}}>Times Recieved</Text>
            </Box>
            <TextField style={{width: 50, paddingLeft: 5, paddingRight: 5}}/>
            <Button variant="outlined" sx={{color: 'red', borderColor: 'red'}} onClick={() => { }}> Save </Button>
        </Box>
        <Box style={{width: 300, backgroundColor: "white", height: 60, alignItems: 'center', justifyContent: 'center',  display: 'flex',
          flexDirection: 'row', padding: 10, margin: 5}} sx={{ border: 1, borderColor:'black', borderRadius: '16px' }}>
            <Box style={{padding: 15}}>
              <PersonAddIcon style={{color: 'black'}}/>
            </Box>
            <Box fontStyle={{display: 'flex', flexDirection: 'column'}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: '800'}}>Probation</Text>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>Times Recieved</Text>
            </Box>
            <TextField style={{width: 50, paddingLeft: 5, paddingRight: 5}}/>
            <Button variant="outlined" sx={{color: 'black', borderColor: 'black'}} onClick={() => { }}> Save </Button>
        </Box>
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
