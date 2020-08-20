import React from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addName, addMail} from '../store/action';

function signIn(props) {
  console.log('STORE MAIL var ==', props.mail);
  console.log('STORE NAME var =', props.name);
  return (
    <View>
      <View>
        <Text style={styles.warnText}>
          Üyelik için bilgilerinizi doldurunuz
        </Text>
      </View>
      <TextInput
        onChangeText={name => props.addName(name)}
        placeholder="İsim"
        style={styles.boxes}></TextInput>
      <TextInput
        onChangeText={mail => props.addMail(mail)}
        placeholder="E-Posta"
        style={styles.boxes}></TextInput>
      <TouchableOpacity
        style={styles.continue}
        onPress={() => props.navigation.navigate('locationPage')}>
        <Text style={{color: 'white'}}>Doğrula</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({mail: state.userMail, name: state.userName});
const mapDispatchToProps = {
  addName,
  addMail,
};
export default connect(mapStateToProps, mapDispatchToProps)(signIn);

const styles = StyleSheet.create({
  warnText: {
    fontSize: 20,
    padding: 15,
    color: 'grey',
  },
  boxes: {
    borderWidth: 1,
    margin: 15,
    height: '8%',
  },
  continue: {
    marginTop: '60%',
    borderWidth: 1,
    backgroundColor: '#61A5EA',
    width: 300,
    alignItems: 'center',
    marginLeft: 50,
  },
});
