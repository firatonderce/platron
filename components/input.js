import React from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';



const Input = props => (
  console.log('propsss', props),
  <View style={styles.login}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {props.header}
        </Text>
    </View>

    <View style={{ flex: 1 }}>
      <Text style={styles.inputContext}>Telefon Numaran</Text>
      <View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder='+90'
            onChangeText={props.onChange}
          ></TextInput>
        </View>
      </View>
    </View>

    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.continue}
        onPress={props.onPress}>
        <Text style={{ color: 'white' }}>Devam</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: '4%' }}>
        <Text style={{ marginLeft: '2%' }}>{props.question}</Text>
        <TouchableOpacity
          onPress={props.secondOnPress}>
          <Text style={{ color: 'orange', marginLeft: '6%' }}>{props.directiveButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>

);



export default Input;

const styles = StyleSheet.create({
  login: {              //Main-View style
    flex: 1,
    flexDirection: 'column',
  },
  header: {             //Header-View style
    margin: '4%',
    flex: 1,
  },
  headerText: {
    fontSize: 23,
    marginLeft: '5%',
    color: 'grey',
  },
  input: {
    borderBottomWidth: 2,
    width: '80%',
    fontSize: 20,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginLeft: '5%',
  },
  continue: {
    borderWidth: 1,
    backgroundColor: '#61A5EA',
    width: 300,
    alignItems: 'center',
    marginLeft: 50,
  },

  inputContext: {
    marginLeft: '5%',
  },
});
