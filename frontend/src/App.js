import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

    async function registerUser(event){
      event.preventDefault();
      const response = await fetch('http://localhost:7000/api/signup' ,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          mdp,
        })
      })
      const data = await response.json();
      console.log(data)
    }

      

  
  return (
    <div>
      <h1>Sign UP</h1>
      <form onSubmit={registerUser}>
        <input type='text' value={name} placeholder='name' onChange={(e) => setName(e.target.value)}/><br/>
        <input type='email' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type='password' value={mdp} placeholder='password' onChange={(e) => setMdp(e.target.value)}/><br/>
        <input type='submit' value="Register"/>
      </form>
    </div>
  );
}

export default App;
