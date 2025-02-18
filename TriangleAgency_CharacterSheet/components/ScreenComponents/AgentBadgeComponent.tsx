import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import React = require('react');
import ImageUpload from './helpers/imageUpload';
import { Card, CardContent } from '@mui/material';

export default function AgentBadgeComponent() {

  return (
    <Card style={{width: '70%', margin: 15}}>
        <CardContent>
            <View style={styles.container}>
                <View>
                    <ImageUpload />
                </View>
                <Text>name</Text>
                <Text>pronouns</Text>
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
});
