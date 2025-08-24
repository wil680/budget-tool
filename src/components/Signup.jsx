import { signup } from '../lib/auth.js'
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom'

function Signup(){
    const navigate = useNavigate()
    const handleSubmit = (e) =>{

    }

    return <div className='card p-4 m-4'>
    
    <h1 className='fs-4 mb-4 text-center'>Sign Up</h1>    
    <div className="mb-3">
        <input type="name" className="form-control" id="exampleInputName" placeholder="Name"/>
    </div>
    <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
    </div>
    <div className="mb-3">
        <input type="password" className="form-control mb-3" id="exampleInputPassword1" placeholder="Password"/>
        <input type="password" className="form-control mb-3" id="exampleInputPassword1" placeholder="Reenter Password"/>

    </div>
    <div className="mb-3">
        <button type="submit" className="btn btn-primary">Signup</button>
    </div>
        <Link classname='nav-link' to='/login'>Login</Link>
    </div>
}

export default Signup;