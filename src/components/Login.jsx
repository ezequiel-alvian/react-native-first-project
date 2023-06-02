import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from './StyledTextInput' 
import { LoginValidationSchema } from '../validationSchemas/login'
import StyledText from './StyledText'




const initialValues = {
    email: '',
    password: ''
}

const styled = StyleSheet.create({
    container: {
        margin: 12
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    }

})

const FormikInputValue = ({name, ...props}) => {
    const [ field, meta, helpers ] = useField(name)
    return(
        <>        
        <StyledTextInput
            value={field.value}
            onChangeText={ value => helpers.setValue(value)}
            {...props}
        />
        {meta.error && <StyledText style={styled.error}>{meta.error}</StyledText>}
        </>
    )
}

const Login = () => {

    return(
        <Formik 
            initialValues={initialValues} 
            onSubmit={ values => console.log(values)}
            validationSchema={LoginValidationSchema}
        >
            {({handleSubmit}) => {
                return (
                    <View style={styled.container}>
                        <FormikInputValue 
                            placeHolder='E-mail'
                            name='email'
                        />
                        <FormikInputValue
                            placeHolder='password'
                            name='password'
                            secureTextEntry
                        />
                        <Button onPress={handleSubmit} title='Log In'/>
                    </View>
                )
            }}
        </Formik> 
    )
}

export default Login