import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Landing = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle='light-content' />
      <View style={styles.header}>
        <Animatable.Image
          animation='fadeIn'
          delay={1000}
          style={styles.logo}
          source={require('../../assets/logo-landing.png')}
          resizeMode='stretch'
        />
      </View>
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <Text style={styles.title}>Wallet, in your fingertips.</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => navigation.navigate('Sign In')}
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
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0582CA',
  },
  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: 800,
    textAlign: 'center',
    color: '#393D40',
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  logo: {
    width: 220,
    height: 220,
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

export default Landing;
