import { Badge, Col, Row } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({valor}) => {
  return (
    <>
    {valor.map((e)=>{
      return <Row className="justify-content-md-center mt-3" key={e.id}>
      <Col className="p-0 border-top border-start border-bottom border-warning border-2 border-opacity-75 shadow" xs md="3" lg="2">
        <EmpleadoAvatar avatar={e.pic}></EmpleadoAvatar>
      </Col>
      <Col className="d-flex flex-column justify-content-center border-top border-end border-bottom border-warning border-2 border-opacity-75 shadow bg-dark text-light" xs md="6" lg="5">
        <h3>{e.fullName}</h3>
        <p>
        {e.title}
          <Badge bg="warning text-dark" className="mx-2">
          {e.department}
          </Badge>
        </p>
      </Col>
    </Row>
    })}
      </>
  );
};

export default EmpleadoRow;
