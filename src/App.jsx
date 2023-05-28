import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <>
      <Container className="mt-5 main">
        <section className="">
          <h1>Lista de Empleados</h1>
          <hr />
        </section>
        <EmpleadoList></EmpleadoList>
      </Container>
      <footer className="py-5 bg-dark text-light text-center">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
