// YourProjectName/src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const HomeScreen: React.FC = () => {
  const onPressLearnMore = () => {
    // Alert.alert('Button pressed!', 'You pressed the Learn More button.');
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Shovo</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPressLearnMore}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#841584', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 10,
  },
});

export default HomeScreen;
