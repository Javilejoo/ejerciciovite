import Login from "../view/login"
import Home from "../view/home"

function Router({ruta}){
    switch(ruta){
        case "/login":
            return <Login></Login>
        case "/":
            return <Home></Home>
        default:
            return (
                <div>
                    <h1>Ruta actual {ruta}</h1>
                </div>
            )
    }
}

export default Router