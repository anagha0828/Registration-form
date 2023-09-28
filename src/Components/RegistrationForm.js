import React, { Component } from 'react';
import './RegistrationForm.css'; 
// Export as a named export
export { RegistrationForm };

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const { name, email, password, confirmPassword } = this.state;
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form or perform further actions here
      alert('Registration successful');
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { name, email, password, confirmPassword, errors } = this.state;

   
  

    return (
      <div  className='form-container '>
     
       
            <h2>Register</h2>
            <form className='form' onSubmit={this.handleSubmit} >
              <div >
                <label >Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div >
                <label >Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                 
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div >
                <label >Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                 
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <div >
                <label >Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  
                />
                {errors.confirmPassword && (
                  <span className="error">{errors.confirmPassword}</span>
                )}
              </div>
              <div >
                <button type="submit">Sign Up</button>
        </div>
           
          </form>
        </div>
      
    );
  }
}

export default RegistrationForm;