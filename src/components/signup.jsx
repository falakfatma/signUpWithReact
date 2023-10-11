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
  return (
    <form type="active" className='sign_Form'>
      <input placeholder="Name"  className="signup_Form_Items" value={name}/>
      <input placeholder="Email" className="signup_Form_Items"  value={email}/>
      <input placeholder="Password" className="signup_Form_Items"  value={password}/>
      <button className="btn" type="submit" onClick={signUpHandler}>Submit</button>
    </form>
  )
}