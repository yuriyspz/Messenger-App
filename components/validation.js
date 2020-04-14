const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length <= 2) {
        errors.username = 'Must be at least 3 character long'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (!(/^(?=.*[A-Z])/).test(values.password) || !(/^(?=.*[0-9])/).test(values.password)) {
        errors.password = 'Must contain at least 1 capital letter and 1 number'
    }

    return errors
};

export default validate;
