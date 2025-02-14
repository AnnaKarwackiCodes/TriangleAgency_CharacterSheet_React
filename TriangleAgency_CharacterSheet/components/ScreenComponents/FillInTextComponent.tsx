//this is for areas that you have a question and then a prompt to fill out info
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { FillInText } from '@/helpers/typing';
import React = require('react');
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

export default function FillInTextComponent({promptQuestion, responseTitle, textId, saveCall, responseText} : FillInText) {
  const [textInput, setTextInput] = useState('');
  const [editText, setEditText] = useState(false);
  const [bodyText, setBodyText] = useState('fasdfdsfdsafdsfdsafdsafdsfadsfdsafdsf');
  

    const handleTextInputChange = (event:any) => {
        setTextInput(event.target.value);
    };
  
    React.useEffect(() => {
      console.log(responseText);
      setBodyText(responseText);
    }, []);

    React.useEffect(() => {
      console.log(responseText);
      setBodyText(responseText);
    }, [responseText]);


  return (
    <Card style={styles.card}>
        <CardContent>
            <View style={styles.container}>
                <Text style={styles.prompt}>{promptQuestion}</Text>
                {editText && <View style={styles.view}>
                  <TextField id={textId} value= {textInput} rows={4} maxRows={10} onChange= {handleTextInputChange} label={responseTitle} variant="outlined" style={styles.textField} multiline/>
                  <Button variant="outlined" style={styles.button} onClick={() => { saveCall(textId, textInput); setEditText(false);}}> Save </Button>
                </View>}
                {!editText && <View style={styles.view}>
                  <Text style={styles.bodyText}>{bodyText}</Text>
                  <Button variant="outlined" style={styles.button}  onClick={() => { setEditText(true);}}> Edit </Button>
                </View>}
                
            </View>
        </CardContent>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 'auto'
  },
  prompt:{
    paddingBottom: 5,
    fontSize: 18
  },
  textField: {
    width:'100%',
    marginTop: 15,
    marginBottom: 15,
  },
  card: {
    margin: 5,
    width: 350
  },
  bodyText: {
    fontSize:15,
    marginBottom: 15
  },
  button: {
    width: 150
  },
  view: {
    width: '100%'
  }
});