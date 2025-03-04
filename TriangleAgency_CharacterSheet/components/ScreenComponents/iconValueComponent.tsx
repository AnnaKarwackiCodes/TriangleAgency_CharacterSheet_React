import { Box, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Text } from '@/components/Themed';

export default function IconValueComponent({icon, title, details, toolTip, saveFunc, color}: any){
  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = (event:any) => {
    setTextInput(event.target.value);
};
 return (
    <Box>
          <Box style={{width: 300, backgroundColor: "white", height: 60, alignItems: 'center', justifyContent: 'center',  display: 'flex',
            flexDirection: 'row', padding: 10, margin: 5}} sx={{ border: 1, borderColor: color, borderRadius: '16px' }}>
              <Box style={{padding: 15}}>
                {icon}
              </Box>
              <Box fontStyle={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{color: color, fontSize: 20, fontWeight: '800'}}>{title}</Text>
                <Text style={{color: color, fontSize: 15, fontWeight: '500'}}>{details}</Text>
              </Box>
              <TextField id={title} style={{width: 50, paddingLeft: 5, paddingRight: 5}} onChange= {handleTextInputChange} value={textInput}/>
              <Button variant="outlined" sx={{color: color, borderColor: color}} onClick={() => { saveFunc(textInput); }}> Save </Button>
          </Box>
          <Box style={{margin: 10, width: 300}}>
              <Text>{toolTip}</Text>
          </Box>
        </Box>
 );
}