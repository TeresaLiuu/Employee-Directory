import './App.css';
import API from './utils/API';
import Header from './components/Header';
import NavBar from './components/NavBar';
import EmployeeHeader from './components/EmployeeHeader';
import EmployeeList from './components/EmployeeList';
import { Col, Container, Row } from './components/Grid';
import React, { useEffect, useState } from 'react';

function APP() {
    const [employees, setEmployees] = useState([]);
    const [lastSort, setLastSort] = useState('');
    const [search, setSearch] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        API.getEmployeeList().then((res) => {
            setEmployees(res.data.results)
        });
    }, []);


  
    return (
        <div>
            <Header />
            <NavBar />
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <EmployeeHeader />
                    </Col>
                    <Col size="md-12">
                        <EmployeeList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default APP;
