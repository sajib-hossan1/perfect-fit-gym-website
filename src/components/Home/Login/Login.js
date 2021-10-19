import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    
    
    const {signInUsingGoogle, processLogin,handleEmailChange,handlePasswordChange } = useAuth();


    const handleGoogleSignIn = () => {
      signInUsingGoogle();
    }

    return (
        <div className="log-in">
            <h1>Please LogIn</h1>
            <div>
                <Form onSubmit={processLogin} className="w-25 mx-auto">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                  </Form.Group>
                  <Button className="btn btn-primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <div className="text-center mt-4">
                    <span>Haven't registered?</span> <Link className="text-decoration-none" to="/register">Register Here</Link>
                    <p>or</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-warning">{googleIcon}oogle Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;