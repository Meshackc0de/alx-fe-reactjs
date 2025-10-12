import {useState } from 'react'
function RegistartionForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!username) {
            newErrors.username = 'username is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        }
        if (!password) {
            newErrors.password = 'password is required';
        }

        setErrors(newErrors);
        if (object.keys(newErrors).length === 0){
            alert("Form submitted successfully!")
        }
    };
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            {ErrorMessage.username && <p style={{ color: 'red'}}>{errors.username}</p>}
            <input type='email' placeholder='email' value={email}
            onChange= {(e) => setEmail(e.target.value) }
            />
            {errors.email && <p style={{ color: 'red'}}>{errors.email}</p>}
            
            <input type='password' placeholder='password' value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p style={{ color: 'red'}}>{errors.password}</p>}
            <button type='submit'>Register</button>
        </form>
        
        </>
     );
}

export default RegistartionForm;