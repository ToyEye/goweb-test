import * as yup from 'yup';

const contactSchema = yup.object().shape({
  name: yup.string(),
  email: yup.yup.string().email().required('Email is required'),
});

export default contactSchema;
