import { login } from '../lib/auth.js';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';



function Login(){
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const ok = login({email: 'a@a.com', password: 'test'});
        if(ok) 
            navigate('/dashboard', {replace:true});
    }
    return <div className='card p-4 m-4'>
    <form onSubmit={handleSubmit}>
    <h1 className='fs-4 mb-4 text-center'>Sign In</h1>    
    <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
    </div>
    <div className="mb-3">
        <input type="password" className="form-control mb-5" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div className="mb-3">
        <button type="submit" className="btn btn-primary">Login</button>
    </div>
    <Link className="nav-link" to='/signup'> Signup</Link>
    </form>
    </div>
}

export default Login;
