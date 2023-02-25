import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';   
import '../../App.css';
import axios from "axios";
import {useNavigate, useParams  } from 'react-router-dom';


function EditUser() {

  const navigate = useNavigate();
  const id = useParams();
  // console.log(id.id);

  const [password1, setPassword1] = useState('');


  useEffect(() => {
    loadUser();
  }, []);


  const loadUser = async () => {

    const result = await axios.get(`http://localhost:8080/user/${id.id}`);

    console.log(result.data);


    formik.setFieldValue('title', result.data.title);
    formik.setFieldValue('name', result.data.name);
    formik.setFieldValue('phone', result.data.phone);
    formik.setFieldValue('address', result.data.address);
    formik.setFieldValue('username', result.data.username);
    formik.setFieldValue('email', result.data.email);
    
    setPassword1(result.data.password);

  
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object().shape({


    name: Yup.string().required('Name is required'),

    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),

    address: Yup.string().required('Address is required')
            .min(10, 'Address must be at least 10 characters')
            .max(100, 'Address must be at most 100 characters'),

    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),

    email: Yup.string().required('Email is required').email('Email is invalid') ,

    password: Yup.string()
      .required('Password is required')
      .test('password', 'Password wrong', (value) => {
        return value == password1
      }
      )
      ,


  });

  const formik = useFormik({

    initialValues: {
        name: '',
        phone: '',
        address: '',
        username: '',
        email: '',
        password: '',
        title: '',
      acceptTerms: false,
    },
    validationSchema,


    onSubmit: async (data) => {

        const newData = {
            title: data.title,
            name: data.name,
            phone: data.phone,
            address: data.address,
            username: data.username,
            email: data.email,
        }


      await axios.put(`http://localhost:8080/user/change/${id.id}`,newData).then((response) => {
            navigate("/" ,{ state: {email : newData.email }} );
            alert("Update user successfully")
            formik.handleReset();

        }).catch((error) => {
            console.log("Cannot update user");
        }
     );


      console.log(JSON.stringify(data, null, 2));
    },

  });

  return (
    <div className="Registration-n">

      <form onSubmit={formik.handleSubmit}>

      <div className="header-wraper-n">

      <h1 className='Topic-n' >Join us, You pizza fan</h1>

       {/* //title */}
       <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <label htmlFor="title">Title</label>
          
            <select  name="title" placeholder='Select title' className="form-control" onChange={formik.handleChange} value={formik.values.title}>
                <option value="">Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
                <option value="Rev">Rev</option>
                <option value="Ms">Ms</option>
            </select>

            <div div className="invalid-feedback">
            {formik.errors.title && formik.touched.title ? formik.errors.title : null}
             </div>   
        </div>

  {/* //name       */}
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Leonardo DiCaprio" 

            value={formik.values.name}
            
            className={
              'form-control' +
              (formik.errors.name && formik.touched.name
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            
          />
          <div className="invalid-feedback">
            {formik.errors.name && formik.touched.name
              ? formik.errors.name
              : null}
          </div>
        </div>



 {/* //Phone_NO */}
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <label htmlFor="phone"> Phone Number </label>
          <input
            name="phone"
            type="text"
            placeholder="0771234567"
            className={
              'form-control' +
              (formik.errors.phone && formik.touched.phone
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <div className="invalid-feedback">
            {formik.errors.phone && formik.touched.phone
              ? formik.errors.phone
              : null}
          </div>
        </div>


{/* //Address */}
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="text"
            placeholder="234/2 , kilinochchi  , Srilanka" 
            className={
              'form-control' +
              (formik.errors.address && formik.touched.address
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <div className="invalid-feedback">
            {formik.errors.address && formik.touched.address? formik.errors.address : null}
          </div>
        </div>

        {/* //username */}
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <label htmlFor="username"> Username </label>
          <input
            name="username"
            type="text"
            placeholder="leoncaprio"
            className={
              'form-control' +
              (formik.errors.username && formik.touched.username
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}

            value={formik.values.username}
          />
          <div className="invalid-feedback">
            {formik.errors.username && formik.touched.username

              ? formik.errors.username
              : null}
          </div>
        </div>




   {/* //email      */}
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            type="email"
            placeholder="leonardodiCaprio@gmail.com"
            className={
              'form-control' +
              (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
            }
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="invalid-feedback">
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null}
          </div>
        </div>


{/* //Password  */}
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <label htmlFor="password"> Password </label>
          <input
            name="password"
            placeholder="********"
            type="password"
            className={
              'form-control' +
              (formik.errors.password && formik.touched.password
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="invalid-feedback">
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null}
          </div>
        </div>

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

          <button type="submit" className="btn btn-outline-primary mx-2">
            Register
          </button>

          <button
            type="button"
            className="btn btn-outline-warning float-right mx-2"
            onClick={formik.handleReset}
          >
            Reset
          </button>

        </div>

        </div>

      </form>
    </div>
  );
}

export default EditUser;

