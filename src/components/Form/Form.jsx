import React from 'react';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import contactSchema from 'model/contactSchema';
import guyJpg from 'images/home/contact.jpg';
import guyJpgx from 'images/home/contact@2x.jpg';
import guyWebp from 'images/home/contact.webp';
import guyWebpx from 'images/home/contact@2x.webp';
import { Button } from 'components/reusableComponents';
import { ContactContainer, FormContainer } from './Form.styled';
import warning from 'images/form/worning.svg';

const initialValues = {
  name: '',
  email: '',
};

const Form = () => {
  const onSubmit = () => {
    toast.success('Your contacts send');
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: contactSchema,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <ContactContainer id="contact">
      <picture>
        <source srcSet={`${guyWebp} 1x, ${guyWebpx} 2x`} type="image/webp" />
        <source srcSet={`${guyJpg} 1x , ${guyJpgx} 2x`} type="image/jpeg" />
        <img src="guyJpg" alt="guy" />
      </picture>
      <FormContainer>
        <h3>Request Callback</h3>
        <form onSubmit={formik.handleSubmit} name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <input
              className="formInput"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="error">{formik.errors.name && formik.touched.name}</p>
          </label>
          <label>
            <input
              className="formInput"
              placeholder="Enter email*"
              id="email"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">
                <img src={warning} alt="worning" className="warning" />
                <p>{formik.touched.email && formik.errors.email}</p>
              </div>
            )}
          </label>
          <Button className="button" type="submit">
            Send
          </Button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Form;
