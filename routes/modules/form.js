import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Formulario() {

  const [errorMessage, setErrorMessage] = useState({email: false, password: false});

  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"});

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
    if(!e.target.value.contains("@")){
      setErrorMessage({...errorMessage, email: false})
      alert("Email is invalid")
    } else { 
      setErrorMessage({...errorMessage, email: true})
      alert("Email is valid")
    }
  });

  const handlePasswordChange = ((e) =>  {
    setFormValues({...formValues, password: e.target.value})
    const passwordRegex = /^(?!^[0-9]$)(?!^[a-zA-Z]$)^([a-zA-Z0-9]{6,15})$/gm;
    if(e.target.value.length < 9 && e.target.value.match(passwordRegex)){
      setErrorMessage({...errorMessage, password: false})
      alert("Password is not valid")
    }
    else{ 
      setErrorMessage({...errorMessage, password: true})
      alert("Password is valid")
    }
  });

  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const clickSubmit = (() => {
    //Call fetch
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailregex.test(formValues.email);
    const isPasswordValid = passwordregex.test(formValues.password);
    if (isEmailValid) {
      setErrorMessage({...errorMessage, email: false})
      alert("Email is valid")
    } else {
      setErrorMessage({...errorMessage, email: true})
      alert("Email is not valid")}
    if (isPasswordValid) {
      setErrorMessage({...errorMessage, password: false})
      alert("Password is valid")
    } else {
      setErrorMessage({...errorMessage, password: true})
      alert("Password is not valid")}
    alert(JSON.stringify(formValues))
  });
return (
  <div>
    <h1>Inicio de sesión</h1>
     
    <Form>
    <Form.Group className="mb-6" controlId="formBasicEmail">
      <Form.Label>nombre de usuario</Form.Label>        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isValid ={!(errorMessage.email)} isInvalid = {errorMessage.email}/>
        { !validationStates.emailState && <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>}
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isValid = {errorMessage.password} isInvalid = {!errorMessage.password} />
        { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
      </Form.Group>
    <div>
        <Row>
            <Col>
                <Button variant="primary">
                    Ingresar
                </Button>
            </Col>
            <Col>
                <Button variant="secondary">
                    Cancelar
                </Button>
            </Col>
        </Row>
    </div>
  </Form>
  </div>
);
}
export default Formulario;