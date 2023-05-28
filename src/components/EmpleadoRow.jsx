import { Badge, Col, Row } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (valor) => {
  return (
          <Row className="justify-content-md-center">
            <Col className="p-0 border-top border-start border-bottom border-warning border-2 border-opacity-75 shadow" xs md="3" lg="2">
              <EmpleadoAvatar avatar={"https://xsgames.co/randomusers/avatar.php?g=female"}></EmpleadoAvatar>
            </Col>
            <Col className="d-flex flex-column justify-content-center border-top border-end border-bottom border-warning border-2 border-opacity-75 shadow bg-dark text-light" xs md="6" lg="5">
              <h3>Hola</h3>
              <p>
                CEO
                <Badge bg="warning text-dark" className="mx-2">
                  Negocio
                </Badge>
              </p>
            </Col>
          </Row>
        
  );
};

export default EmpleadoRow;
