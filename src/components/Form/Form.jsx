import React from 'react';
import { useFormik } from 'formik';
import contactSchema from 'model/contactSchema';
import guyJpg from 'images/home/contact.jpg';
import guyJpgx from 'images/home/contact@2x.jpg';
import guyWebp from 'images/home/contact.webp';
import guyWebpx from 'images/home/contact@2x.webp';

const initialValues = {
  name: '',
  email: '',
};

const Form = () => {
  const onSubmit = () => {
    console.log('click');
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: contactSchema,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <div id="contact">
      <picture>
        <source srcSet={`${guyWebp} 1x, ${guyWebpx} 2x`} type="image/webp" />
        <source srcSet={`${guyJpg} 1x , ${guyJpgx} 2x`} type="image/jpeg" />
        <img src="guyJpg" alt="guy" />
      </picture>
      <div>
        <h3>Request Callback</h3>
        <form>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Form;
