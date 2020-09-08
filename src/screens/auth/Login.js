import React, {Fragment, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {
  Layout,
  Text,
  Input,
  Icon,
  Button,
  TopNavigationAction,
} from '@ui-kitten/components';
import {styles} from '../../styles/Login';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const UserIcon = (props) => <Icon {...props} name="person" />;
const Eye = (props) => <Icon {...props} name="eye" />;
const EyeOff = (props) => <Icon {...props} name="eye-off" />;

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const EyeAction = () => (
    <TopNavigationAction
      icon={passwordVisible ? Eye : EyeOff}
      onPress={() => setPasswordVisible(!passwordVisible)}
      activeOpacity={5}
    />
  );

  let refPassword;

  const nextToPassword = () => {
      refPassword && refPassword.focus();
  };

  return (
    <Fragment>
      <ScrollView>
        <KeyboardAvoidingView style={styles.keyboardView}>
          <Layout style={styles.firstLayout}>
            <Text category="h1" status="control">
              Masuk
            </Text>
            <Text style={styles.subtitle} category="s1" status="control">
              Masuk ke akun anda.
            </Text>
          </Layout>
          <Layout style={styles.secondLayout} level="4">
            <Input
              style={styles.inputEmail}
              autoCorrect={true}
              keyboardType='email-address'
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType='next'
              placeholder="Masukkan alamat email"
              size="large"
              accessoryRight={UserIcon}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={nextToPassword}
            />
            <Input
              style={styles.inputPassword}
              ref={ref => {refPassword = ref}}
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Masukkan kata sandi"
              returnKeyType='done'
              size="large"
              accessoryRight={EyeAction}
              value={password}
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
            />
            <Button
              style={styles.buttonLogin}
              size="large"
              onPress={() => console.log('pressed')}>
              MASUK
            </Button>
            <Button
              style={styles.buttonRegister}
              appearance="ghost"
              status="basic"
              onPress={() => navigation.navigate('Register')}>
              Belum punya akun? Daftar disini.
            </Button>
          </Layout>
        </KeyboardAvoidingView>
      </ScrollView>
    </Fragment>
  );
};

export default Login;
