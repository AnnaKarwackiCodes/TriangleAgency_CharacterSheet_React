//this is for areas that you have a question and then a prompt to fill out info
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { FillInText } from '@/helpers/typing';
import React = require('react');
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

export default function FillInTextComponent({promptQuestion, responseTitle, textId, saveCall} : FillInText) {
  const [textInput, setTextInput] = useState('');
  const [editText, setEditText] = useState(false);
  const [bodyText, setBodyText] = useState('fasdfdsfdsafdsfdsafdsafdsfadsfdsafdsf');
  const QA1Text = useSelector((store: any) => {
    return store.userInfo.AQ1;
  });

    const handleTextInputChange = (event:any) => {
        setTextInput(event.target.value);
    };
  
    React.useEffect(() => {
      console.log(QA1Text);
      setBodyText(QA1Text);
    }, []);

    React.useEffect(() => {
      console.log(QA1Text);
      setBodyText(QA1Text);
    }, [QA1Text]);


  return (
    <Card style={styles.card}>
        <CardContent>
            <View style={styles.container}>
                <Text style={styles.prompt}>{promptQuestion}</Text>
                {editText && <View>
                  <TextField id={textId} value= {textInput} onChange= {handleTextInputChange} label={responseTitle} variant="outlined" style={styles.textField} multiline/>
                  <Button onClick={() => { saveCall(textId, textInput); setEditText(false);}}> Save </Button>
                </View>}
                {!editText && <View>
                  <Text style={styles.bodyText}>{bodyText}</Text>
                  <Button onClick={() => { setEditText(true);}}> Edit </Button>
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
    width:'100%'
  },
  card: {
    margin: 5
  },
  bodyText: {
    fontSize:15
  }
});