import { Navigate, Route, Routes } from "react-router-dom"
import { BarraNavegadora } from "../componentes/BarraNavegadora"
import { PaginaCarrito } from "../paginas/PaginaCarrito"
import { PaginaInicio } from "../paginas/PaginaInicio"
import { PaginaTienda } from "../paginas/PaginaTienda"

export const TiendaArabia = () => {
    return (
        <>
            <BarraNavegadora></BarraNavegadora>
            <div className="container">
                <Routes>
                        <Route path="/carrito" element={<PaginaCarrito></PaginaCarrito>}></Route>
                        <Route path="/tienda" element={<PaginaTienda></PaginaTienda>}></Route>
                        <Route path="/inicio" element={<PaginaInicio></PaginaInicio>}></Route>
                </Routes>
            </div>
        </>
    )
}
