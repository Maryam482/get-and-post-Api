import React from 'react'
import { useFormik } from 'formik';
 
function Addtopost() {
    const formik = useFormik({
        initialValues: {
          Title: '',
          Body: '',
        
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="Title">Title</label>
          <input
            id="Title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label htmlFor="Body">Body</label>
          <input
            id="Body"
            name="body"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <button type="submit">Submit</button>
        </form>
      );
}

export default Addtopost
