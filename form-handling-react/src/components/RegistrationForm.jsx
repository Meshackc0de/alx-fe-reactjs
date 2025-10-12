import {useState } from 'react'
function RegistartionForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!username || !email || !password){
            alert('Please fill in all fields!')
        } else {
            alert('Form submitted successfully!')
        } 
    };
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' value= {username}
            onChange={(e) => setUsername(e.target.value)}
            /> <br/>

            <input type='email' placeholder='email' value={email}
            onChange= {(e) => setEmail(e.target.value) }
            /><br/>

            <input type='password' placeholder='password' value={password}
            onChange={(e) => setPassword(e.target.value)}
            /> <br/>
            <button type='submit'>Register</button>
        </form>
        
        </>
     );
}

export default RegistartionForm;