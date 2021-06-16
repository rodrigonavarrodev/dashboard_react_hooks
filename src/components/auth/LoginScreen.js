import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from '../../hooks/useForm'
import "./login.css";

export const LoginScreen = () => {

const dispatch = useDispatch();

const [ formLoginValues, handleLoginInputChange ] = useForm({
   email: '',
   password: ''
});


const { email, password } = formLoginValues;

const handleLogin = ( e ) => {
  e.preventDefault();
  dispatch( startLogin(email, password) )
}


  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={ handleLogin }>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="email"
                value= { email }
                onChange= { handleLoginInputChange }
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value= { password }
                onChange= { handleLoginInputChange }
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Logo</h3>
          
        </div>
      </div>
    </div>
  );
};
