import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from '../components/default/SideNav';
import AddNodeForm from '../components/add-node/AddNodeForm';

const AddNode = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col
                        xs={2}
                        id="sidebar-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <SideNav selected={'add-node'} />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <Container className="pt-4">
                            <AddNodeForm />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddNode;