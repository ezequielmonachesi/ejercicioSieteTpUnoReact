import { Container } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  return (
    <Container className="py-5">
      <EmpleadoRow></EmpleadoRow>
    </Container>
  );
};

export default EmpleadoList;
