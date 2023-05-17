import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            username: yup.string().min(4, "Username too short").max(7, "Username too long"),
            email: yup.string().email("Must be a valid email"),
            password: yup.string()
        }),
        onSubmit: (values)=>{
            console.log(values);
        }
    })
    console.log(formik.errors);
    // console.log(formik.values.username);
  return (
    <>
        <form onSubmit={formik.handleSubmit} className='p-3 rounded mt-4 mx-auto shadow' action="">
            <div className="form-group my-2">
                <input
                 value={formik.values.username}
                 onChange={formik.handleChange}
                 name='username'
                 type="text"
                 onBlur={formik.handleBlur}
                 className={formik.errors.username?"form-control is-invalid": "form-control"}
                 placeholder='Username' />
                 <span className='text-danger fw-bold'>{formik.errors.username}</span>
            </div>
            <div className="form-group my-2">
                <input
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 name='email' type="email"
                 className="form-control"
                 placeholder='Email' />
            </div>
            <div className="form-group my-2">
                <input
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 name='password' type="password" className="form-control" placeholder='Enter password' />
            </div>
            <div>
                <button type='submit' className="btn btn-success">Reg User</button>
            </div>
        </form>
    </>
  )
}

export default Signup