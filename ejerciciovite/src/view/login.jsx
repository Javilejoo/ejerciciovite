function Login(){
    const cambiarRuta = () => {

        window.location.href = "/home"
        
    }
    return(
        
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Usuario"></input>
            <input type="password" placeholder="Contraseña"></input>
            <button onClick={cambiarRuta}>Iniciar sesión</button>
        </div>
    )
}
    

export default Login;