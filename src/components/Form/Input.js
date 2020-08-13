import React, { useContext } from 'react';
import { FormContext } from '../../context/form-context';
import { Input } from '@ui-kitten/components';

export default Input = (props) => {
    const { name } = props;
    const { onValueChange, form } = useContext(FormContext);

    return <Input {...props} value={form[name]} onChange={onValueChange} />;
};
