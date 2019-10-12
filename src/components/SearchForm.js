  
import React, { useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Search = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="user-form">
      <Form>
        <Field type="text" name="name" placeholder="Place name here" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}    

        <button type="submit">Search </button>
      </Form>
      {user.map(user => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
        </ul>
      ))}
    </div>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res);
        setStatus(res.data.result);
        resetForm();
      })
      .catch(err => console.log(err.res));
  }
})(Search);
console.log("This is the HOC", FormikUserForm);
export default FormikUserForm;








