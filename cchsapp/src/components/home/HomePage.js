import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function HomePage() {
    return (
       <Container>
        <Row>
            <Col>
                <Image
                    src ="./img/cchslogo.jpeg"
                    fluid />
            </Col>
            <Col>
            <h1>Orientation Home Page</h1>
            </Col>
        </Row>
       </Container> 
    )
}

export default HomePage
