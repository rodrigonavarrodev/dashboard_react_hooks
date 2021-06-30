import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Navbar } from "../navbar/Navbar";
import { eventStartAddNew } from "../../actions/events";

const initEvent = {
    firstname: 'Rodrigo',
    lastname: 'Navarro',
    email: 'testbilleteraap@gmail.com',
    sector: 'Operaciones',
    phone: '1165048738',
    role: 'Admin'
  }

export const AddEmployeesScreen = () => {

const dispatch = useDispatch();


    const [inputValid, setinputValid] = useState(true)

    const [formValues, setformValues] = useState( initEvent )

    const { firstname, lastname, email, sector, phone, role } = formValues;

    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if ( lastname.trim().length <= 2 ) {
            return setinputValid(false);
        }
        
        dispatch( eventStartAddNew (formValues))

        //grabar en la base de datos
        setinputValid(true)

        setformValues (initEvent)
    }

  return (
    <>
      <Navbar />
      <div id="app">
        <div id="main">

        <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3" />
            </a>
          </header>

            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Empleados</h3>
                  <p className="text-subtitle text-muted">
                    Ultimos empleados adheridos
                  </p>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first">
                  <nav
                    aria-label="breadcrumb"
                    className="breadcrumb-header float-start float-lg-end"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Empleados
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>


          <section id="basic-horizontal-layouts">
            <div className="row match-height">
              <div className="col-md-8 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Horizontal Form</h4>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form form-horizontal">
                        <div className="form-body">
                          <div className="row">
                            <div className="col-md-4">
                              <label>First Name</label>
                            </div>
                            <div className="col-md-8 form-group">
                              <input
                                type="text"
                                id="first-name"
                                className="form-control"
                                placeholder="Nombre"
                                name="firstname"
                                value={firstname}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="col-md-4">
                              <label>Email</label>
                            </div>
                            <div className="col-md-8 form-group">
                              <input
                                type="email"
                                id="email-id"
                                className="form-control"
                                name="email-id"
                                placeholder="Email"
                              />
                            </div>
                            <div className="col-md-4">
                              <label>Mobile</label>
                            </div>
                            <div className="col-md-8 form-group">
                              <input
                                type="number"
                                id="contact-info"
                                className="form-control"
                                name="contact"
                                placeholder="Mobile"
                              />
                            </div>
                            <div className="col-md-4">
                              <label>Password</label>
                            </div>
                            <div className="col-md-8 form-group">
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                              />
                            </div>
                            <div className="col-12 col-md-8 offset-md-4 form-group">
                              <div className="form-check">
                                <div className="checkbox">
                                  <input
                                    type="checkbox"
                                    id="checkbox1"
                                    className="form-check-input"
                                    defaultChecked
                                  />
                                  <label htmlFor="checkbox1">Remember Me</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 d-flex justify-content-end">
                              <button
                                type="submit"
                                className="btn btn-primary me-1 mb-1"
                              >
                                Submit
                              </button>
                              <button
                                type="reset"
                                className="btn btn-light-secondary me-1 mb-1"
                              >
                                Reset
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>             
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
