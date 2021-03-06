import React, {Fragment, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {
  Layout,
  Text,
  Input,
  Icon,
  Button,
} from '@ui-kitten/components';
import {styles} from '../../styles/Register';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const UserIcon = (props) => <Icon {...props} name="person" />;
const EyeIcon = (props) => <Icon {...props} name="eye" />;
const EmailIcon = (props) => <Icon {...props} name="email" />;
const RepeatIcon = (props) => <Icon {...props} name="repeat" />;

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  let refEmail, refPassword, refRepeatPassword;

  const nextToEmail = () => {
      refEmail && refEmail.focus();
  };

  const nextToPassword = () => {
      refPassword && refPassword.focus();
  };

  const nextToRepeatPassword = () => {
    refRepeatPassword && refRepeatPassword.focus();
  };

  return (
    <Fragment>
      <ScrollView>
        <KeyboardAvoidingView style={styles.keyboardView}>
          <Layout style={styles.firstLayout}>
            <Text category="h1" status="control">
              Daftar
            </Text>
            <Text style={styles.subtitle} category="s1" status="control">
              Daftarkan akun untuk masuk.
            </Text>
          </Layout>
          <Layout style={styles.secondLayout} level="4">
            <Input
              style={styles.input}
              autoCapitalize="none"
              autoCompleteType="name"
              returnKeyType="next"
              placeholder="Nama"
              size="large"
              accessoryRight={UserIcon}
              value={name}
              onChangeText={setName}
              onSubmitEditing={nextToEmail}
            />
            <Input
              style={styles.input}
              ref={(ref) => {
                refEmail = ref;
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              placeholder="Email"
              size="large"
              accessoryRight={EmailIcon}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={nextToPassword}
            />
            <Input
              style={styles.input}
              ref={(ref) => {
                refPassword = ref;
              }}
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Kata sandi"
              returnKeyType="next"
              size="large"
              accessoryRight={EyeIcon}
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
              onSubmitEditing={nextToRepeatPassword}
            />
            <Input
              style={styles.input}
              ref={(ref) => {
                refRepeatPassword = ref;
              }}
              autoCapitalize="none"
              autoCompleteType="off"
              placeholder="Ulangi kata sandi"
              returnKeyType="done"
              size="large"
              accessoryRight={RepeatIcon}
              value={repeatPassword}
              secureTextEntry={true}
              onChangeText={setRepeatPassword}
            />
            <Button
              style={styles.buttonRegister}
              size="large"
              onPress={() => console.log('pressed')}>
              DAFTAR
            </Button>
            <Button
              style={styles.buttonLogin}
              appearance="ghost"
              status="basic"
              onPress={() => navigation.navigate('Login')}>
              Sudah punya akun? Masuk disini.
            </Button>
          </Layout>
        </KeyboardAvoidingView>
      </ScrollView>
    </Fragment>
  );
};

export default Register;
