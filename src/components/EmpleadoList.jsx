import { Container } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";
import Empleados from "./Empleados"

const EmpleadoList = () => {

  return (
    <Container className="py-5">
        {/* {Empleados.map((empleados)=>{
            return <EmpleadoRow key={empleados.id} nombreCompleto={empleados.fullName} cargo={empleados.title} departamento={empleados.department} foto={empleados.pic}></EmpleadoRow>
        })
        } */}
        <EmpleadoRow valor = {Empleados}></EmpleadoRow>
        {/* <h1>{Empleados.map((e,i)=>{e.fullName})}</h1> */}
    </Container>
  );
};

export default EmpleadoList;
