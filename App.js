import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//custome button with different modes and states
const Button = ({text, onPress, icon, mode, isLoading}) => {
  //choose the styles based on the button mode
  const buttonStyles = () => {
    if (mode == 'contained')
      return [styles.button, styles.contained, styles.buttonShadow];
    else if (mode == 'outlined')
      return [styles.button, styles.outlined, styles.buttonShadow];
    else return styles.button;
  };

  return (
    <TouchableOpacity style={buttonStyles()} onPress={onPress}>
      {icon == true ? (
        <Text style={{color: mode == 'contained' ? 'white' : 'dodgerblue'}}>
          *
        </Text>
      ) : null}
      {isLoading == true ? (
        <ActivityIndicator
          color={mode == 'contained' ? 'white' : 'dodgerblue'}
        />
      ) : null}
      <Text style={{color: mode == 'contained' ? 'white' : 'dodgerblue'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const App = () => {
  //function to show a message when button is pressed
  const handlePress = message => {
    alert(message);
  };

  //array containing the messages
  const messages = [
    'default button pressed',
    'icon button pressed',
    'loading button pressed',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.buttonsContainer}>
        <Button text={'DEFAULT'} onPress={() => handlePress(messages[0])} />
        <Button
          text={'ICON'}
          icon={true}
          onPress={() => handlePress(messages[1])}
        />
        <Button
          text={'LOADING'}
          isLoading={true}
          onPress={() => handlePress(messages[2])}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          mode={'outlined'}
          text={'DEFAULT'}
          onPress={() => handlePress(messages[0])}
        />
        <Button
          mode={'outlined'}
          text={'ICON'}
          icon={true}
          onPress={() => handlePress(messages[1])}
        />
        <Button
          mode={'outlined'}
          text={'LOADING'}
          isLoading={true}
          onPress={() => handlePress(messages[2])}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          mode={'contained'}
          text={'DEFAULT'}
          onPress={() => handlePress(messages[0])}
        />
        <Button
          mode={'contained'}
          text={'ICON'}
          icon={true}
          onPress={() => handlePress(messages[1])}
        />
        <Button
          mode={'contained'}
          text={'LOADING'}
          isLoading={true}
          onPress={() => handlePress(messages[2])}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 1,
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  button: {
    justifyContent: 'space-evenly',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  outlined: {
    borderColor: 'rgba(125,125,125,0.3)',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  contained: {
    backgroundColor: 'dodgerblue',
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default App;
