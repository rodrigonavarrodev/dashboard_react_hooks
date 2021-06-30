import React from "react";

import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
//import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formLoginValues, handleLoginInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  return (
    <div id="auth">
      <div className="row h-100">
        <div className="col-lg-5 col-12">
          <div id="auth-left">
            <div className="auth-logo">
              <a href="index.html">
                <img src="/logo-ap-b.svg" alt="Logo" />
              </a>
            </div>
            <h1 className="auth-title">Hola</h1>
            <p className="auth-subtitle mb-5">
              Si ya tenes cuenta ingresa tus datos!
            </p>
            <form onSubmit={handleLogin} action="index.html">
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className="form-control form-control-xl"
                  placeholder="Correo"
                  name="email"
                  value={email}
                  onChange={handleLoginInputChange}
                />
                <div className="form-control-icon">
                  <i className="bi bi-person" />
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  className="form-control form-control-xl"
                  placeholder="Password"
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  onChange={handleLoginInputChange}
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock" />
                </div>
              </div>
              <div className="form-check form-check-lg d-flex align-items-end">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-gray-600"
                  htmlFor="flexCheckDefault"
                >
                  Mantenerme logueado!
                </label>
              </div>
              <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                Ingresar
              </button>
            </form>
            <div className="text-center mt-5 text-lg fs-4">
              <p className="text-gray-600">
                ¿No tenes cuenta?{" "}
                <a href="auth-register.html" className="font-bold">
                  Registrate
                </a>
                .
              </p>
              <p>
                <a className="font-bold" href="auth-forgot-password.html">
                  ¿Olvidaste tu contraseña?
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block">
          <div id="auth-right">
            <img
              src="/illustrations-login_animated.svg"
              alt="Logo"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
