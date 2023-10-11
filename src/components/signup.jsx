import react, { useState, useEffect } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signUpHandler = (e) => {
    e.preventDefault();
    console.log(email, name, password);
  }
 const handleNameChange = (e) => {
    
  }
 const handleEmailChange = (e) => {
    
  }
 const handlePasswordChange = (e) => {
    
  }
 const handleConfirmPasswordChange = (e) => {
    
  }
  fetch("https://jsonplaceholder.typicode.com/users")
  return (
    <form type="active" className='sign_Form'>
      <input placeholder="Name"  className="signup_Form_Items" onInput={handleNameChange} value={name}/>
      <input placeholder="Email" className="signup_Form_Items" onInput={handleEmailChange} value={email}/>
      <input placeholder="Create Password" className="signup_Form_Items" onInput={handlePasswordChange} value={password}/>
      <input placeholder="Confirm Password" className="signup_Form_Items" onInput={handleConfirmPasswordChange} value={password}/>
      <button className="btn submitBtn" type="submit" onClick={signUpHandler}>Submit</button>
    </form>
  )
}