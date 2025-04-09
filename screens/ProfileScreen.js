import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Layout from '../components/Layout';

export default function ProfileScreen({ navigation }) {
  const handlePress = (label) => {
    Alert.alert(`נלחץ: ${label}`);
  };

  return (
    <Layout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>מסך פרופיל</Text>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('עריכת פרופיל')}>
          <Text style={styles.buttonText}>עריכת פרופיל</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('שינוי סיסמה')}>
          <Text style={styles.buttonText}>שינוי סיסמה</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('חזרה לדף הבית')}>
          <Text style={styles.buttonText}>חזרה לדף הבית</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={() => handlePress('התנתקות')}>
          <Text style={styles.logoutText}>התנתקות</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 40
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  logoutButton: {
    marginTop: 40,
    padding: 12,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8
  },
  logoutText: {
    color: 'red',
    fontSize: 16
  }
});
