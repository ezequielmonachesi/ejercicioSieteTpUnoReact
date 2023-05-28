import { Badge, Col, Container, Row } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-md-center">
          <Col className="p-0 border-top border-start border-bottom border-warning shadow" lg="2">
            <EmpleadoAvatar></EmpleadoAvatar>
          </Col>
          <Col className="d-flex flex-column justify-content-center border-top border-end border-bottom border-warning border-2 border-opacity-25 shadow" lg="5">
            <h3>Laya Dueñas</h3>
            <p>
              CEO{" "}
              <Badge bg="primary" className="">
                Business
              </Badge>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmpleadoRow;
