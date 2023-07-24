import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";
const Navigation = () => {
const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
return (
<>
<Navbar bg="secondary" variant="dark" className="navbar">
    <Container className="justify-content-around">
        <Nav>
            <Navbar.Brand href="/">
            <img
              src="src\assets\imgs\R.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        </Nav>
        <Nav className="mr-auto">
            <NavLink className={`${setActiveClass}`} to="/">
                Home
            </NavLink>
            
            <NavLink className={`${setActiveClass} ml-2`} to="/pokemones">
                Pokemones
            </NavLink>
        </Nav>
    </Container>
</Navbar>

</>
);
}

export default Navigation