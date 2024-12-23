import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RegisterForm() {
  const initialValues = {fname: "", lname: "", email: "", password: ""};
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(errors)
    if(Object.keys(errors).length === 0 && isSubmit)
      console.log(values)
  }, [errors])

  const validate = (someValues) => {
    const formErrors = {}
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
    if(!someValues.fname){
      formErrors.fname = "Please enter your first name";
    }
    if(!someValues.lname){
      formErrors.lname = "Please enter your last name";
    }
    if(!someValues.email){
      formErrors.email = "Email is required";
    }
    if(!someValues.password){
      formErrors.password = "Please enter valid password";
    }
    return formErrors;
  }

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-gray-200">
      <h1 className="text-2xl md:text-5xl font-semibold">Welcome to GS Schools</h1>
      <h3 className="font-medium text-lg text-gray-500 mt-4">
        Please enter your details
      </h3>

      <form onSubmit={handleSubmit} className="mt-8">
        <div>
          <label className="text-lg font-medium">First Name</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mt-1 bg-transparent"
            placeholder="Enter your first name, and middle name if available"
            value={values.fname}
            onChange={handleChange}
            name="fname"
            type="text"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Last Name</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mt-1 bg-transparent"
            placeholder="Enter your last name"
            value={values.lname}
            onChange={handleChange}
            name="lname"
            type="text"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            name="email"
            type="email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label> 
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            name="password"
            type="password"
          />
        </div>
        
        
        <div className="mt-8 flex flex-col gap-y-4">
          <button type="submit" className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
            Sign up
          </button>
        </div>
        <div className="mt-4 flex gap-4">
           <h3>Already registered? </h3>
           <Link className="hover:underline" to="/">Login here</Link>
        </div>
      </form>
    </div>
  );
}
