import React from 'react';
import ReactDOM from 'react-dom/client';
import Formulario from './form.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import CafeList from './listadoCafe.js';
import { IntlProvider } from 'react-intl';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from "./locales/es";


ReactDOM.render(
 <IntlProvider>
    <div>
        <h1>El aroma mágico</h1>
    </div>
    <div>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.directoalpaladar.com%2Fingredientes-y-alimentos%2Festa-mejor-forma-conservar-cafe-grano&psig=AOvVaw36Ttz47wRFBg7oRwWHgDZ0&ust=1696082005633000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjUkoT8z4EDFQAAAAAdAAAAABAE" alt='cafe'/>
    </div>
   <Container>
     <Row xs={1}>
   <Col>
     <Formulario/>
   </Col></Row>
   </Container>
   <Container>
        <Row xs={1}>
            <Col>
                <CafeList/>
            </Col>
        </Row>
    </Container>
 </IntlProvider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();