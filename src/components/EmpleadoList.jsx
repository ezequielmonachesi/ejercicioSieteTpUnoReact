import { Container } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";
import Empleados from "./Empleados"

const EmpleadoList = () => {

  return (
    <Container>
        <EmpleadoRow valor = {Empleados}></EmpleadoRow>
    </Container>
  );
};

export default EmpleadoList;
