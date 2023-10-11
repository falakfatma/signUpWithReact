import react, { useState, useEffect } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const signUpHandler = (e) => {
    e.preventDefault();
  
  return (
    <form type="active" className='sign_Form'>
      <input placeholder="Name"/>
      <input placeholder="Email"/>
      <input placeholder="Password"/>
      <button className="btn" type="submit" onClick={signUpHandler}>Submit</button>
    </form>
  );
}