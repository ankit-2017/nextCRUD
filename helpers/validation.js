import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    username: Yup.string()
              .min(4, 'must be longer than 4 character')
              .required('username is required'),
    Email : Yup.string()
            .email('invalid email')
            .required('Email is required'),
    Name : Yup.string()
            .required('Name is required')
  })

export const initialValues = {
    username: '',
    Email: '',
    Name: ''
  }