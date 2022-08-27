import React from "react";
// TODO: import useFormik from formik library
//add formik from the Terminal in VS CODE
//npm install formik --save
import {useFormik} from 'formik'
function App() {
  // TODO: add a const called formik assigned to useFormik() - a formic component
  // formik [turtorial](https://formik.org/docs/tutorial)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form', values);
    },
    validate: values => {
      let errors = {};
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && values.name && values.password) {
        errors.email = 'OK'
      }
      if(!values.name) errors.name = 'Field required';
      //https://formik.org/docs/guides/validation
      //validate email copied from formik validation page
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.password) errors.password = 'Field required';
    
      return errors;
    }
  });



  return (
    /*In order to work with formik each element need a pattern.
    1. name='' attribute
    2. onChange={formik.handleChange} event
    3. value={formik.values.'insert name attribute'}
    
    */
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name='name' type='text' onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input name='email' type='text' onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name='password' type='text' onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
