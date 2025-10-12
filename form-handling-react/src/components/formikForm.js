import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//validation rules using Yup
const validationSchema = Yup.object({
    username: Yup.string().required('username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
    return (
        <div>
            <Formik 
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                    }}
                validationShema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form submitted!', values);
                    alert('Registration Successful!');
                    resetForm();
                }}
            > 
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field name='username' type='text'/>
                        <ErrorMessage name='email' component='div' style={{color: 'red'}} />
                    </div>

                    <div>
                        <label>Password:</label>
                        <Field name='password' type='password'/>
                        <ErrorMessage name='password' component='div' style={{ color: 'red'}} />
                    </div>

                    <button type='submit'>Register</button>
                </Form>  
            </Formik>   
        </div>
    );
};

export default FormikForm;