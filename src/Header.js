import React, { useState } from 'react';
import Welcome from './Welcome.jsx';
import Navbar from './Navbar'

import myLogo from './mylogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';



const Header = () => {

    const [isLoggedOn, setLoggedOn] = useState(false);

    

    return <Row className="square border border-warning">
        <Col sm={1}><img src={myLogo} className="myLogo img-responsive" alt="logo" /></Col>
        <Col sm={5} className='p-3 text-center'><h1>SPADE</h1></Col>
        <Col sm={5} className="p-3 text-center"><Welcome isLoggedOn={isLoggedOn} setLoggedOn={setLoggedOn} userName="Kayode" /></Col>
        <Col sm={2}><Navbar /></Col>

    </Row>
}


export default Header;

