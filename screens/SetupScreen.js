import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenWrapper from '../components/ScreenWrapper';
import TopHeader from '../components/TopHeader';

export default function SetupScreen({ navigation }) {
  const [deviceSerial, setDeviceSerial] = useState('');
  const [companySerial, setCompanySerial] = useState('');
  const [driverId, setDriverId] = useState('');

  const handleSave = async () => {
    if (!deviceSerial || !companySerial || !driverId) {
      Alert.alert('שגיאה', 'אנא מלא את כל השדות');
      return;
    }

    const data = {
      deviceSerial,
      companySerial,
      driverId,
    };

    try {
      await AsyncStorage.setItem('deviceSetup', JSON.stringify(data));
      navigation.replace('Loading'); // מעבר ל־Loading במקום Login
    } catch (error) {
      Alert.alert('שגיאה', 'אירעה שגיאה בעת שמירת הנתונים');
    }
  };

  const handlePress = (label) => {
    console.log(`נלחץ: ${label}`);
  };

  return (
    <ScreenWrapper showImage={true}>
      <TopHeader
        onPressMenu={() => handlePress('תפריט')}
        onPressAction={() => handlePress('חיוב')}
      />
      <View style={styles.innerContent}>
        <Text style={styles.title}>הגדרת מכשיר</Text>
        <TextInput
          style={styles.input}
          placeholder="מספר סידורי של המכשיר"
          value={deviceSerial}
          onChangeText={setDeviceSerial}
        />
        <TextInput
          style={styles.input}
          placeholder="מספר סידורי של החברה"
          value={companySerial}
          onChangeText={setCompanySerial}
        />
        <TextInput
          style={styles.input}
          placeholder="מזהה נהג"
          value={driverId}
          onChangeText={setDriverId}
        />
        <View style={{ marginTop: 20 }}>
          <Button title="המשך" onPress={handleSave} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  innerContent: {
    position: 'absolute',
    top: 160,
    left: 30,
    right: 30,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
