import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />

    const {signInUsingGoogle, createNewUser,handleNameChange,handleEmailChange,handlePasswordChange } = useAuth();


    const handleGoogleSignIn = () => {
      signInUsingGoogle();
    }

    const handleRegister = () => {
      createNewUser();
    }
    

    return (
        <div className="register">
            <h1>Please LogIn</h1>
            <div>
                <Form onSubmit={handleRegister} className="w-25 mx-auto">
                  <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="btn btn-primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <div className="text-center mt-4">
                    <span>Already registered?</span> <Link className="text-decoration-none" to="/login">Log In Here</Link>
                    <p>or</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-warning">{googleIcon}oogle Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;