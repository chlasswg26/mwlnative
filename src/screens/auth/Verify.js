import React, {Fragment, useState, useEffect} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {Layout, Input, Text} from '@ui-kitten/components';
import {styles} from '../../styles/Verify';
import {useNavigation} from '@react-navigation/native';
import Wave from 'react-native-waveview';

const Verify = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
  });

  useEffect(() => {
    const {first, second, third, fourth, fifth, sixth} = code;

    if (first && second && third && fourth && fifth && sixth) {
      console.log('fulfilled');
    } else {
      console.log('partially is empty');
    }
  }, [code]);

  console.log(code);

  let refFirst, refSecond, refThird, refFourth, refFifth, refSixth;

  return (
    <Fragment>
      <Layout
        level="4"
        style={styles.layout}>
        <KeyboardAvoidingView
          style={styles.keyboardView}>
          <Text
            category="h5"
            style={styles.textTitle}>
            Masukkan kode verifikasi
          </Text>
          <Layout
            level="4"
            style={styles.secondLayout}>
            <Input
              style={styles.input}
              textStyle={styles.textInput}
              ref={(ref) => {
                refFirst = ref;
              }}
              placeholder="X"
              size="large"
              maxLength={1}
              value={code.first}
              onChangeText={(value) => {
                if (value) {
                  setCode({
                    ...code,
                    first: value,
                  });
                  refSecond.focus();
                } else {
                  setCode({
                    ...code,
                    first: '',
                  });
                  refFirst.focus();
                }
              }}
            />
            <Input
              style={styles.input}
              textStyle={styles.textInput}
              ref={(ref) => {
                refSecond = ref;
              }}
              placeholder="X"
              size="large"
              maxLength={1}
              value={code.second}
              onChangeText={(value) => {
                if (value) {
                  setCode({
                    ...code,
                    second: value,
                  });
                  refThird.focus();
                } else {
                  setCode({
                    ...code,
                    second: '',
                  });
                  refFirst.focus();
                }
              }}
            />
            <Input
              style={styles.input}
              textStyle={styles.textInput}
              ref={(ref) => {
                refThird = ref;
              }}
              placeholder="X"
              size="large"
              maxLength={1}
              value={code.third}
              onChangeText={(value) => {
                if (value) {
                  setCode({
                    ...code,
                    third: value,
                  });
                  refFourth.focus();
                } else {
                  setCode({
                    ...code,
                    third: '',
                  });
                  refSecond.focus();
                }
              }}
            />
            <Input
              style={styles.input}
              textStyle={styles.textInput}
              ref={(ref) => {
                refFourth = ref;
              }}
              placeholder="X"
              size="large"
              maxLength={1}
              value={code.fourth}
              onChangeText={(value) => {
                if (value) {
                  setCode({
                    ...code,
                    fourth: value,
                  });
                  refFifth.focus();
                } else {
                  setCode({
                    ...code,
                    fourth: '',
                  });
                  refThird.focus();
                }
              }}
            />
            <Input
              style={styles.input}
              textStyle={styles.textInput}
              ref={(ref) => {
                refFifth = ref;
              }}
              placeholder="X"
              size="large"
              maxLength={1}
              value={code.fifth}
              onChangeText={(value) => {
                if (value) {
                  setCode({
                    ...code,
                    fifth: value,
                  });
                  refSixth.focus();
                } else {
                  setCode({
                    ...code,
                    fifth: '',
                  });
                  refFourth.focus();
                }
              }}
            />
            <Input
              style={styles.input}
              textStyle={styles.textInput}
              ref={(ref) => {
                refSixth = ref;
              }}
              returnKeyType="send"
              placeholder="X"
              size="large"
              maxLength={1}
              value={code.sixth}
              onChangeText={(value) => {
                if (value) {
                  setCode({
                    ...code,
                    sixth: value,
                  });
                } else {
                  setCode({
                    ...code,
                    sixth: '',
                  });
                  refFifth.focus();
                }
              }}
              onSubmitEditing={() => console.log('submitted')}
            />
          </Layout>
          <Layout
            level="4"
            style={styles.thirdLayout}>
            <Wave
              style={styles.wave}
              H={150}
              waveParams={[
                {A: 150, T: 330, fill: '#62c2ff'},
                {A: 185, T: 340, fill: '#0087dc'},
                {A: 200, T: 400, fill: '#1aa7ff'},
              ]}
              animated={true}
            />
          </Layout>
        </KeyboardAvoidingView>
      </Layout>
    </Fragment>
  );
};

export default Verify;
