import React, { createContext } from 'react';
import { Layout } from '@ui-kitten/components';

export const FormContext = createContext({
    onValueChange: null,
    form: null
});

export default AwesomeForm = ({
    children,
    form,
    onChangeForm,
    ...props
}) => {
    const onValueChange = (event) => {
        form = {
            ...form,
            [event.target.name]: event.target.value
        };
        if (typeof onChangeForm === 'function') onChangeForm(form);
    };

    const values = {
        onValueChange,
        form
    };

    return (
        <FormContext.Provider value={values}>
            <Layout {...props}>{children}</Layout>
        </FormContext.Provider>
    );
};
