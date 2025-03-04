//level up tree for Compentency, Reality, and Anomaly
import { Box, TextField, Button, Divider } from '@mui/material';
import React from 'react';
import { Text } from '@/components/Themed';
import Checkbox from '@mui/material/Checkbox';

export default function LevelUpComponent({title, trackLength, curValue, colDetails0, colDetails1, levelUpDetails, levelUpFunc}:any){
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    function createTrack(){
        let track;
        track = levelUpDetails.map((element: any, index: number) => {
            return <Checkbox  {...label} checked={index < curValue} defaultChecked color="default" onChange={()=>{levelUpFunc(index + 1)}}/>
        });
        return track;
    }

    return (
        <Box alignContent={'center'} textAlign={'center'} padding={5}>
            <Text>{title}</Text>
            <Box>
                {createTrack()}
            </Box>
            <Box style={{flex: 1, flexDirection: 'row'}}>
                <Box style={{width: '50%'}} sx={{ border: 1, borderColor: 'black'}}>
                    <Text>{colDetails0}</Text>
                </Box>
                <Box style={{width: '50%'}} sx={{ border: 1, borderColor: 'black'}}>
                    <Text>{colDetails1}</Text>
                </Box>
            </Box>
        </Box>
    );
}