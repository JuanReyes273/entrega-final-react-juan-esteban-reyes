import "./navBar.css";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";

function NavBarComponent() {
    return (
        <div className="navbar">
            <div class="navbar-brand">
                <Link to="/">MovieMania</Link>
            </div>
            <ul class="navbar-list">
                <li><Link to="/genero/Animacion">Animación</Link></li>
                <li><Link to="/genero/Accion">Acción</Link></li>
                <li><Link to="/genero/Drama">Drama</Link></li>
                <li><Link to="/genero/Fantasia">Fantasía</Link></li>
                <li><Link to="/genero/Romance">Romance</Link></li>
            </ul>
            <div>
                <CartWidgetComponent/>
            </div>  
        </div>
    );
}

export default NavBarComponent;