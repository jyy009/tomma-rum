import { React, Route, Routes } from "react-router-dom";
import { routes } from "./routes.const";

function RouteApp() {
    return (
        <Routes>
            {routes.map((item, index) => (
                <Route key={index} path={item.path} element={item.element} />
            ))}
        </Routes>
    );
}

export default RouteApp;