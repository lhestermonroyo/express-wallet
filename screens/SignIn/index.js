import React, { useState } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firebase from 'firebase';

const SignIn = (props) => {
  const { navigation } = props;
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [hidePassword, setHidePassword] = useState(true);

  const handleValues = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleSubmit = async () => {
    const { email, password } = values;

    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#0582CA' barStyle='light-content' />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name='arrow-left' color='#7D8183' size={20} />
      </TouchableOpacity>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.label}>Email</Text>
      <View style={styles.action}>
        <TextInput
          style={styles.textInput}
          placeholder='Your email'
          autoCapitalize='none'
          onChangeText={(val) => handleValues('email', val)}
        />
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.action}>
        <TextInput
          style={styles.textInput}
          placeholder='Your password'
          autoCapitalize='none'
          onChangeText={(val) => handleValues('password', val)}
          secureTextEntry={hidePassword}
        />
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => handleHidePassword()}
        >
          {hidePassword ? (
            <Feather name='eye-off' color='#7D8183' size={16} />
          ) : (
            <Feather name='eye' color='#7D8183' size={16} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.btnPrimaryText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.content}>Don't have an account yet?</Text>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => navigation.navigate('Sign Up')}
        >
          <Text style={styles.btnOutlineText}>Create an Account </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        Copyright &copy; 2021. Express Wallet
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 224,
    height: 60,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: 800,
    color: '#393D40',
    marginTop: 30,
  },
  subtitle: {
    color: '##7D8183',
    textAlign: 'left',
    fontFamily: 'Inter',
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 12,
    marginTop: 15,
    marginBottom: 6,
    color: '#393D40',
  },
  action: {
    borderWidth: 1,
    borderColor: '#7D8183',
    height: 36,
    borderRadius: 6,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    paddingHorizontal: 12,
    flex: 1,
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' && 0,
    color: '#05375a',
  },
  actionBtn: {
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: 20,
    flex: 1,
  },
  content: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 20,
    color: '#7D8183',
  },
  btnPrimary: {
    backgroundColor: '#0582CA',
    borderWidth: 1,
    borderColor: '#0582CA',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginVertical: 6,
  },
  btnPrimaryText: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 700,
    color: '#fff',
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0582CA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    height: 45,
    marginVertical: 6,
  },
  btnOutlineText: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 700,
    color: '#0582CA',
  },
  footerText: {
    marginTop: 30,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 600,
    textAlign: 'center',
    color: '#7D8183',
  },
});

export default SignIn;
