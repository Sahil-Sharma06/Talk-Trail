import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const [user, setUser] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request with axios
      const res = await axios.post('http://localhost:8080/api/v1/user/register', user, {
        headers: {
          'Content-Type': 'application/json', // Ensuring content-type is correct
        },
        withCredentials: true, // Required if your backend uses cookies/sessions
      });

      // If request is successful, navigate to login and show success message
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      // Handling Axios errors and showing the correct error message
      if (error.response) {
        // Backend responded with status code outside 2xx
        console.log('Error Response Data:', error.response.data);
        toast.error(error.response.data.message || 'Registration failed');
      } else if (error.request) {
        // Request was made but no response received
        console.log('Error Request:', error.request);
        toast.error('No response from server. Please try again later.');
      } else {
        // Other errors (setup or unexpected issues)
        console.log('Error Message:', error.message);
        toast.error('An unexpected error occurred. Please try again.');
      }
    }

    // Resetting form fields after submission
    setUser({
      fullname: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
    });
  };

  return (
    <div className="mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 border border-gray-100 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <h1 className="text-3xl font-bold text-center">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              className="w-full h-10 input input-bordered"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full h-10 input input-bordered"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full h-10 input input-bordered"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className="w-full h-10 input input-bordered"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === 'male'}
                onChange={() => handleCheckbox('male')}
                className="mx-2 checkbox"
              />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === 'female'}
                onChange={() => handleCheckbox('female')}
                className="mx-2 checkbox"
              />
            </div>
          </div>
          <p className="my-2 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <div>
            <button type="submit" className="mt-2 border btn btn-block btn-sm border-slate-700">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
