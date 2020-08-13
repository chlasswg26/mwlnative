import React, { Fragment, useState, useEffect } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Card, Icon, Input, Button, Text, Spinner } from '@ui-kitten/components';
import { useForm, Controller } from 'react-hook-form';
import qs from 'querystring';
import AsyncStorage from '@react-native-community/async-storage';
import { yupResolver } from '@hookform/resolvers';
import { SignInSchema } from '../../utils/Schema';

const Login = (props) => {
    const [field, setField] = useState({
        email: '',
        password: '',
    });
    // const { isFulfilled, isRejected, isLoading, errorMessage } = props.login;
    const { control, handleSubmit, errors } = useForm();

    // useEffect(() => {
    //     if (isFulfilled) {
    //         props.navigation.replace('Token');
    //     }
    // }, [isFulfilled]);

    const dispatchLogin = async () => {
        AsyncStorage.removeItem('token');
        // props.loginAction(qs.stringify(field));
    };

    AsyncStorage.getItem('firstLanding', (error, result) => {
        if (error) {
            replace('Intro');
        } else {
            console.log(result);
        }
    });
    return (
        <Fragment>
            
        </Fragment>
    );
};

export default Login;
