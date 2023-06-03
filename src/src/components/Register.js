import React from 'react'
import './styles/Register.css'

const Register = () => {
  return (
    <div className='register-body'>
      <div className='form-container'>
      <form>
        <div className="input-container">
        <label>First Name</label>
        <input/>
        </div>
        <div className="input-container">
          <label>Last Name</label>
          <input/>
        </div>
        <div className="input-container">
          <label>age</label>
          <input/>
        </div>
      </form>
      </div>
    </div>
  );
};
export default Register;