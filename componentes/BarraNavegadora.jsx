import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { NavLink } from "react-router-dom"

export const BarraNavegadora = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    <NavLink to="/inicio" className="navbar-brand" href="#">Tienda Arabia</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/inicio" className="nav-link" href="#">Inicio</NavLink>
                            <NavLink to="/tienda" className="nav-link" href="#">Tienda</NavLink>
                        </div>
                    </div>

                    <NavLink to="/carrito"  href="">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink >




                </div>

            </nav>



        </>
    )
}
