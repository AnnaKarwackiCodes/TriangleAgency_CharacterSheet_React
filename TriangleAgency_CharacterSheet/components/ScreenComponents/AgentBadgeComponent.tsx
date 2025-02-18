import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import React = require('react');
import ImageUpload from './helpers/imageUpload';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setNamePronouns } from '@/redux/reducers/UserInfo';

export default function AgentBadgeComponent() { 

  const [editMode, setEditMode] = React.useState(false)
  const [nameInput, setNameInput] = React.useState('');
  const [pronounInput, setPronounInput] = React.useState('');
  const dispatch = useDispatch();

  const handleNameInputChange = (event:any) => {
    setNameInput(event.target.value);
  };
  const handlePronounInputChange = (event:any) => {
    setPronounInput(event.target.value);
  };

  function SaveResponse(){
      dispatch(setNamePronouns({name:nameInput, pronouns: pronounInput}));
    }

  return (
    <Card style={{width: '70%', margin: 15}}>
        <CardContent>
            <View style={styles.container}>
                <View style={{marginBottom: 15}}>
                    <ImageUpload />
                </View>
                {editMode && 
                <View>
                  <TextField id={'agentName'} value= {nameInput} rows={1} onChange= {handleNameInputChange} label={'Agent\'s Name'} variant="outlined" style={styles.textField} multiline/>
                  <TextField id={'agentPronoun'} value= {pronounInput} rows={1} onChange= {handlePronounInputChange} label={'Agent\'s Pronouns'} variant="outlined" style={styles.textField} multiline/>
                  <Button variant="outlined" style={styles.button}  onClick={() => { setEditMode(false); SaveResponse();}}>Save</Button>
                </View>}
                {!editMode && 
                <View>
                  <Text style={styles.bodyText}>{nameInput}</Text>
                  <Text style={styles.bodyText}>{pronounInput}</Text>
                  <Button variant="outlined" style={styles.button}  onClick={() => { setEditMode(true);}}>Edit</Button>
                </View>}
                
                
            </View>
        </CardContent>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    margin: 15,
    textAlign: 'center',
  },
  button: {
    width: 150
  },
  textField: {
    width:'100%',
    marginTop: 15,
    marginBottom: 15,
  },
  bodyText: {
    fontSize:18,
    marginBottom: 15
  },
});
