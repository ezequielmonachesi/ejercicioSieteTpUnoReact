import { Badge, Col, Row } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <>
        <Row className="justify-content-md-center">
          <Col className="p-0 border-top border-start border-bottom border-warning border-2 border-opacity-75 shadow" xs md="3" lg="2">
            <EmpleadoAvatar></EmpleadoAvatar>
          </Col>
          <Col className="d-flex flex-column justify-content-center border-top border-end border-bottom border-warning border-2 border-opacity-75 shadow bg-dark text-light" xs md="6" lg="5">
            <h3>Laya Dueñas</h3>
            <p>
              CEO
              <Badge bg="warning text-dark" className="mx-2">
                Business
              </Badge>
            </p>
          </Col>
        </Row>
    </>
  );
};

export default EmpleadoRow;
