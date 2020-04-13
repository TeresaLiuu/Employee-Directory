import './App.css';
import API from './utils/API';
import Header from './components/Header';
import NavBar from './components/NavBar';
import EmployeeHeader from './components/EmployeeHeader';
import EmployeeList from './components/EmployeeList';
import { Col, Container, Row } from './components/Grid';
import React from 'react';
import NameSearch from './components/NameSearch';
import DOBSearch from './components/DOBSearch';


class APP extends React.Component {
    state = {
        employees: [],
        nameFilter: '',
        dobStartFilter: '',
        dobEndFilter: '',
        sortType: '',
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.getEmployees()
            .then((res) => {
                this.setState({
                    employees: res.data.results,
                });
            })
            .catch((err) => console.log(err));
    };

    handleStartInputChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            dobStartFilter: value,
        });
    };

    handleEndInputChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            dobEndFilter: value,
        });
    };

    handleInputChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            nameFilter: value.toLowerCase(),
        });
    };


    sortEmployees = (sort) => {
        const sortEmployees = this.state.employees.sort(sort);
        this.setState({
            employees: sortEmployees,
        });
    };




    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <Row>
                                <NameSearch
                                    name={`search`}
                                    label={`Employee Name`}
                                    handleInputChange={this.handleInputChange} />
                            </Row>
                            <Row>
                                <DOBSearch
                                    label={`Born after:`}
                                    name={`beginDate`}
                                    handleInputChange={this.handleInputChange}
                                />
                                <DOBSearch
                                    label={`Born before:`}
                                    name={`endDate`}
                                    handleInputChange={this.handleInputChange}
                                />
                            </Row>
                        </Col>
                        <Col size="md-12">
                            <EmployeeHeader />
                            <EmployeeList employees={this.state.display}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}





export default APP;
