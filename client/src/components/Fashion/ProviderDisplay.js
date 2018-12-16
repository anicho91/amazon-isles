import React from 'react';
import Demo from '../../Pages/ProviderPage/demo';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText,
    Button
} from 'reactstrap';

const Provider = (props) => (
    <div>
        <Container>
            <Row>
                <Col xs='12' md='6'>
                    <Card>
                        {props.profile_picture ?
                            <CardImg top width="100%" src={props.profile_picture} alt="Card image cap" />
                            : <h2>No profile picture</h2>}
                        <CardBody>
                            <CardTitle>User Name: {props.name}</CardTitle>
                            <CardSubtitle>Job Category: {props.category}</CardSubtitle>
                            <CardText>
                                Phone: {props.phone} <br />
                                Street Address: {props.street} <br />
                                City: {props.city} <br />
                                State: {props.state} <br />
                                Country: {props.country} <br />
                                Will Work For: ${props.budget} <br /><br />
                            </CardText>
                            <Button onClick={props.clickProvider} name={props.id}>Select Provider</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs='12' md='6'>
                    {props.demoList.length > 0 ?
                        <Demo demoList={props.demoList} /> : <p>No Demo Information</p>
                    }
                </Col>
            </Row>
        </Container>
    </div>
);

const ProviderInfo = (props) => (
    <div>
        <h1 className="text-center">Provider Information</h1>

        {props.providerList.length ? (props.providerList.map((provider) => (
            <Provider
                key={provider._id}
                id={provider._id}
                profile_picture={provider.profile_picture}
                name={provider.userId}
                category={provider.job_category}
                phone={provider.phone}
                street={provider.street}
                city={provider.city}
                state={provider.state}
                country={provider.country}
                budget={provider.budget}
                demoList={provider.demo}
                clickProvider={props.clickProvider}
            />))) :
            (<p>  Please click on Display Available Provider</p>)
        }
    </div>



);

export default ProviderInfo;