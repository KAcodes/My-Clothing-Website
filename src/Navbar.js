import { Link } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

    function Navbar(props) {
        return (
            <NavDropdown title="Menu">
                    <NavDropdown.Item>
                        <Link to='/'>Home</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/products'>Shop</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/legal'>Legal</Link>
                    </NavDropdown.Item>
            </NavDropdown>
        );
    }

export default Navbar;