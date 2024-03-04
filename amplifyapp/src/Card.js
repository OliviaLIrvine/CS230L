import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Card() {
return (<div>
  <section class="card-group" deck>
      <Container fluid>
        <div class="Card 01"></div>
        <Row>
            <Col sm={4}>
                <div>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card 01</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
</div>);
}

export default Card;